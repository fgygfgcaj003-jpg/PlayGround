export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.engine = null;
    this.engineTarget = 0;
    this.siren = null;
    this.rainGain = null;
    this.ambienceGain = null;
    this.master = null;
    this.t = 0;
    this.lastHorn = 0;
    this.ready = false;
  }

  ensure() {
    if (this.ctx) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.55;
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18; comp.knee.value = 18; comp.ratio.value = 4;
      this.master.connect(comp); comp.connect(this.ctx.destination);
      this.noise = this.makeNoise(2.4);
      this.buildAmbience();
      this.buildEngine();
      this.buildSiren();
      this.ready = true;
    } catch (e) { this.enabled = false; }
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      d[i] = last * 3.2;
    }
    return buf;
  }

  loopNoise(filterType, freq, q, gainValue) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise; src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType; filter.frequency.value = freq; filter.Q.value = q;
    const g = this.ctx.createGain(); g.gain.value = gainValue;
    src.connect(filter); filter.connect(g); g.connect(this.master);
    src.start();
    return { src, filter, gain: g };
  }

  buildAmbience() {
    this.cityHum = this.loopNoise('lowpass', 320, .8, .055);
    this.wind = this.loopNoise('bandpass', 900, .5, .018);
    this.rain = this.loopNoise('highpass', 2200, .3, 0);
    this.rainGain = this.rain.gain;
    // low city drone
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 52;
    const g = this.ctx.createGain(); g.gain.value = .012;
    o.connect(g); g.connect(this.master); o.start();
    this.drone = g;
  }

  buildEngine() {
    const ctx = this.ctx;
    const out = ctx.createGain(); out.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 620; lp.Q.value = .8;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 70;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 35;
    const g2 = ctx.createGain(); g2.gain.value = .35;
    o2.connect(g2); g2.connect(lp);
    o1.connect(lp);
    lp.connect(out); out.connect(this.master);
    o1.start(); o2.start();
    this.engine = { out, lp, o1, o2, active: false };
  }

  buildSiren() {
    const ctx = this.ctx;
    const out = ctx.createGain(); out.gain.value = 0;
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 700;
    const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 1050;
    const g2 = ctx.createGain(); g2.gain.value = .3;
    o.connect(out); o2.connect(g2); g2.connect(out);
    out.connect(this.master);
    o.start(); o2.start();
    this.siren = { out, o, o2, gain: 0, target: 0 };
  }

  resume() {
    this.ensure();
    if (this.ctx?.state === 'suspended') this.ctx.resume();
  }

  setVolume(v) { if (this.master) this.master.gain.setTargetAtTime(v * .6, this.ctx.currentTime, .1); }

  startEngine(v) {
    this.ensure();
    if (!this.engine) return;
    this.engine.active = true;
    this.engine.type = v.type;
    this.engine.out.gain.setTargetAtTime(.055, this.ctx.currentTime, .15);
  }

  stopEngine() {
    if (!this.engine) return;
    this.engine.active = false;
    this.engine.out.gain.setTargetAtTime(0, this.ctx.currentTime, .2);
  }

  update(dt, vehicle, weather, policeDistance) {
    if (!this.ready || !this.ctx) return;
    this.t += dt;
    const ct = this.ctx.currentTime;
    if (this.engine.active && vehicle) {
      const speed = Math.abs(vehicle.speed || 0);
      const max = vehicle.cfg.maxSpeed || 50;
      const rpm = .14 + (speed / max) * .86;
      const throttle = vehicle.throttle || 0;
      const freq = (vehicle.type === 'bus' || vehicle.type === 'truck' ? 38 : 58) + rpm * (vehicle.type === 'super' ? 220 : 130) + throttle * 22;
      this.engine.o1.frequency.setTargetAtTime(freq, ct, .05);
      this.engine.o2.frequency.setTargetAtTime(freq * .5, ct, .05);
      this.engine.lp.frequency.setTargetAtTime(400 + rpm * 1800 + throttle * 500, ct, .08);
      this.engine.out.gain.setTargetAtTime(vehicle.isAir ? .08 : .045 + throttle * .035 + rpm * .02, ct, .1);
      if (vehicle.isAir) {
        this.engine.o1.type = 'sawtooth';
        this.engine.o1.frequency.setTargetAtTime(90 + Math.sin(this.t * 38) * 20, ct, .03);
      }
    }
    // siren based on nearest police
    if (this.siren) {
      if (policeDistance < 130) {
        const v = Math.max(0, 1 - policeDistance / 130) * .085;
        this.siren.target = v;
        const sweep = Math.sin(this.t * 4.6) * .5 + .5;
        this.siren.o.frequency.setTargetAtTime(600 + sweep * 550, ct, .06);
        this.siren.o2.frequency.setTargetAtTime(900 + sweep * 700, ct, .08);
      } else this.siren.target = 0;
      this.siren.out.gain.setTargetAtTime(this.siren.target, ct, .2);
    }
    const rainTarget = weather === 'rain' ? .045 : weather === 'storm' ? .1 : weather === 'snow' ? .015 : 0;
    this.rainGain?.gain.setTargetAtTime(rainTarget, ct, 1.2);
    this.cityHum?.gain.gain.setTargetAtTime(this.nightMode ? .035 : .06, ct, .5);
    this.wind?.gain.gain.setTargetAtTime(this.nightMode ? .014 : .022, ct, 2);
    if (this.drone) this.drone.gain.setTargetAtTime(this.nightMode ? .018 : .01, ct, 1);
  }

  beep(freq = 660, dur = .08, type = 'sine', vol = .08) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + .02);
  }

  horn() {
    if (!this.ready) return;
    const now = performance.now();
    if (now - this.lastHorn < 280) return;
    this.lastHorn = now;
    const ctx = this.ctx, t = ctx.currentTime;
    for (const f of [330, 415]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.045, t + .02); g.gain.setValueAtTime(.045, t + .24); g.gain.exponentialRampToValueAtTime(.0001, t + .36);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + .4);
    }
  }

  click() { this.beep(520, .04, 'sine', .04); }
  jump() { this.beep(220, .12, 'sine', .03); }
  footstep(sprint) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = sprint ? 900 : 600;
    const g = ctx.createGain(); g.gain.setValueAtTime(sprint ? .035 : .022, t); g.gain.exponentialRampToValueAtTime(.0001, t + .12);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + .14);
  }
  crash(force = 5) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 500 + Math.min(1800, force * 80); f.Q.value = .7;
    const g = ctx.createGain(); const vol = Math.min(.22, .03 + force * .012);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + .3);
    src.connect(f); f.connect(g); g.connect(this.master); src.start(t); src.stop(t + .32);
    this.beep(70, .2, 'sine', Math.min(.12, vol));
  }
  thunder() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 180;
    const g = ctx.createGain(); g.gain.setValueAtTime(.28, t); g.gain.exponentialRampToValueAtTime(.0001, t + 2.4);
    src.connect(f); f.connect(g); g.connect(this.master); src.start(t); src.stop(t + 2.5);
  }
  chime() { this.beep(880, .14, 'sine', .06); setTimeout(() => this.beep(1180, .25, 'sine', .05), 130); }
  sirenOff() {}
}
