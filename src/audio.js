/* Procedural WebAudio soundscape — no external assets. */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.camera = null;
    this.ambientTimer = 5;
    this.engineNodes = null;
    this.master = null;
  }

  start() {
    if (this.started) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.started = true;
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.5;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 20;
    comp.ratio.value = 5;
    this.master.connect(comp).connect(this.ctx.destination);
    // noise buffer
    const len = this.ctx.sampleRate * 2;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.startWind();
  }

  setCamera(cam) { this.camera = cam; }

  spatial(pos) {
    if (!this.camera || !pos) return { vol: 1, pan: 0 };
    const cam = this.camera;
    const dx = pos.x - cam.position.x, dy = pos.y - cam.position.y, dz = pos.z - cam.position.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const vol = Math.max(0, 1 - dist / 420) ** 1.4;
    let pan = 0;
    if (cam.matrixWorld) {
      const e = cam.matrixWorld.elements;
      const rx = e[0], rz = e[2];
      pan = Math.max(-0.85, Math.min(0.85, (dx * rx + dz * rz) / Math.max(12, dist)));
    }
    return { vol, pan };
  }

  noiseBurst(dur, freq, q, gain, pan = 0, type = 'bandpass') {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = this.ctx.createStereoPanner();
    p.pan.value = pan;
    src.connect(f).connect(g).connect(p).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  tone(freq, dur, gain, type = 'sine', pan = 0, slide = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = this.ctx.createStereoPanner();
    p.pan.value = pan;
    o.connect(g).connect(p).connect(this.master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  shot(team, pos, vol = 1) {
    if (!this.started) return;
    const s = this.spatial(pos);
    const g = 0.24 * vol * (0.35 + s.vol);
    this.noiseBurst(0.12, team === 'british' ? 1500 : 1200, 0.8, g, s.pan);
    this.tone(140, 0.1, g * 0.7, 'square', s.pan, -80);
  }

  mg(team, pos, vol = 1) {
    if (!this.started) return;
    const s = this.spatial(pos);
    const g = 0.16 * vol * (0.4 + s.vol);
    this.noiseBurst(0.07, 1900, 0.9, g, s.pan);
    this.tone(170, 0.06, g * 0.5, 'square', s.pan, -90);
  }

  explosion(pos, scale = 1) {
    if (!this.started) return;
    const s = this.spatial(pos);
    const g = 0.5 * scale * (0.3 + s.vol);
    this.noiseBurst(0.9 * scale, 300, 0.6, g, s.pan, 'lowpass');
    this.tone(55, 1.1 * scale, g * 0.9, 'sine', s.pan, -35);
  }

  reload() {
    if (!this.started) return;
    this.noiseBurst(0.04, 900, 2, 0.12, 0.15);
    setTimeout(() => this.noiseBurst(0.05, 700, 2, 0.1, 0.15), 120);
  }

  hitmark() {
    if (!this.started) return;
    this.tone(880, 0.05, 0.07, 'triangle', 0, 200);
  }

  startWind() {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise; src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 420; f.Q.value = 0.4;
    const g = this.ctx.createGain(); g.gain.value = 0.035;
    src.connect(f).connect(g).connect(this.master);
    src.start();
    this.windGain = g;
  }

  startEngine() {
    if (!this.started || this.engineNodes) return;
    const t = this.ctx.currentTime;
    const o1 = this.ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 55;
    const o2 = this.ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 83;
    const src = this.ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = 0.7;
    const g = this.ctx.createGain(); g.gain.value = 0;
    const ng = this.ctx.createGain(); ng.gain.value = 0;
    o1.connect(g); o2.connect(g);
    src.connect(f).connect(ng).connect(this.master);
    g.connect(this.master);
    o1.start(); o2.start(); src.start();
    this.engineNodes = { o1, o2, g, ng, src };
  }

  stopEngine() {
    if (!this.engineNodes) return;
    const n = this.engineNodes;
    n.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
    n.ng.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
    setTimeout(() => { try { n.o1.stop(); n.o2.stop(); n.src.stop(); } catch { } }, 700);
    this.engineNodes = null;
  }

  updateEngine(throttle, speed) {
    if (!this.engineNodes || !this.ctx) return;
    const t = this.ctx.currentTime;
    const base = 46 + throttle * 60 + speed * 0.35;
    this.engineNodes.o1.frequency.setTargetAtTime(base, t, 0.1);
    this.engineNodes.o2.frequency.setTargetAtTime(base * 1.51, t, 0.1);
    this.engineNodes.g.gain.setTargetAtTime(0.045 + throttle * 0.05, t, 0.1);
    this.engineNodes.ng.gain.setTargetAtTime(0.02 + throttle * 0.045, t, 0.1);
  }

  update(dt, nearCombat = false) {
    if (!this.started) return;
    this.ambientTimer -= dt;
    if (this.ambientTimer <= 0) {
      this.ambientTimer = 7 + Math.random() * 12;
      // distant artillery rumble
      this.noiseBurst(1.4, 180, 0.5, 0.1 + Math.random() * 0.08, (Math.random() - 0.5) * 1.5, 'lowpass');
      this.tone(38, 1.6, 0.08, 'sine', (Math.random() - 0.5), -10);
    }
    if (this.windGain) this.windGain.gain.value = 0.03 + (nearCombat ? 0.01 : 0);
  }
}
