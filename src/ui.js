import * as THREE from 'three';
import { clamp, formatClock, formatMoney } from './utils.js';
import { BLOCK_CENTER, NODE_POS, CITY_EXTENT } from './city.js';

const $ = (id) => document.getElementById(id);

const TEXT = {
  en: {
    startGame: 'Start Game', newLife: 'New life in Nova City', continue: 'Continue', settings: 'Settings',
    settingsCaption: 'Video · audio · controls', chooseControls: 'Choose how to play', pcMode: 'PC mode',
    pcModeDesc: 'Keyboard and mouse', phoneMode: 'Phone mode', phoneModeDesc: 'Touch controls',
    language: 'Language', liveSimulation: 'LIVE SIMULATION', menuKicker: 'AN OPEN-WORLD LIFE SIMULATOR',
    menuTitle: 'Your city.', menuTitleAccent: 'Every life in it.',
    menuCopy: 'A living metropolis of towers, traffic, weather and consequence. Walk it, drive it, fly it, or just watch the city breathe.',
    districts: 'districts', vehicles: 'vehicles', citizens: 'citizens', liveSystems: 'live systems',
    pcControls: 'WASD move · Mouse look · E interact · Tab phone · M map · Esc pause', buildInfo: 'WebGL · Procedural build',
    move: 'Move', sprint: 'Sprint', jump: 'Jump', interact: 'Interact', phone: 'Phone',
    graphics: 'Graphics quality', shadows: 'Shadows', volume: 'Master volume', invert: 'Invert camera Y',
    timeOfDay: 'Time of day', cameraFov: 'Camera FOV', resetSave: 'Reset save data', clearSave: 'Clear save',
    applyClose: 'Apply & Close', backCity: 'Back to Nova City', system: 'SYSTEM',
  },
  ru: {
    startGame: 'Начать игру', newLife: 'Новая жизнь в Нова-Сити', continue: 'Продолжить', settings: 'Настройки',
    settingsCaption: 'Графика · звук · управление', chooseControls: 'Выберите управление', pcMode: 'Режим ПК',
    pcModeDesc: 'Клавиатура и мышь', phoneMode: 'Режим телефона', phoneModeDesc: 'Сенсорное управление',
    language: 'Язык', liveSimulation: 'ЖИВАЯ СИМУЛЯЦИЯ', menuKicker: 'СИМУЛЯТОР ЖИЗНИ В ОТКРЫТОМ МИРЕ',
    menuTitle: 'Твой город.', menuTitleAccent: 'Твоя история.',
    menuCopy: 'Живой мегаполис с небоскрёбами, движением, погодой и последствиями. Гуляй, води, летай или наблюдай за городом.',
    districts: 'районов', vehicles: 'машин', citizens: 'жителей', liveSystems: 'систем',
    pcControls: 'WASD движение · Мышь обзор · E действие · Tab телефон · M карта · Esc пауза', buildInfo: 'WebGL · Процедурный мир',
    move: 'Идти', sprint: 'Бег', jump: 'Прыжок', interact: 'Действие', phone: 'Телефон',
    graphics: 'Качество графики', shadows: 'Тени', volume: 'Общая громкость', invert: 'Обратить ось камеры Y',
    timeOfDay: 'Время суток', cameraFov: 'Поле зрения', resetSave: 'Сбросить сохранение', clearSave: 'Очистить',
    applyClose: 'Применить и закрыть', backCity: 'Вернуться в Нова-Сити', system: 'СИСТЕМА',
  },
  zh: {
    startGame: '开始游戏', newLife: '在新星城开启新生活', continue: '继续游戏', settings: '设置',
    settingsCaption: '画面 · 音频 · 控制', chooseControls: '选择操作方式', pcMode: '电脑模式',
    pcModeDesc: '键盘和鼠标', phoneMode: '手机模式', phoneModeDesc: '触屏操作',
    language: '语言', liveSimulation: '城市实时模拟', menuKicker: '开放世界生活模拟器',
    menuTitle: '你的城市。', menuTitleAccent: '你的每一种人生。',
    menuCopy: '充满高楼、车流、天气与机遇的鲜活都市。步行、驾驶、飞行，或静静感受城市脉搏。',
    districts: '个城区', vehicles: '辆车辆', citizens: '位市民', liveSystems: '项动态系统',
    pcControls: 'WASD 移动 · 鼠标视角 · E 互动 · Tab 手机 · M 地图 · Esc 暂停', buildInfo: 'WebGL · 程序生成城市',
    move: '移动', sprint: '冲刺', jump: '跳跃', interact: '互动', phone: '手机',
    graphics: '画面质量', shadows: '阴影', volume: '主音量', invert: '反转镜头 Y 轴',
    timeOfDay: '时间', cameraFov: '视野范围', resetSave: '重置存档', clearSave: '清除存档',
    applyClose: '应用并关闭', backCity: '返回新星城', system: '系统',
  },
};

const DISTRICT_COLORS = {
  downtown: '#26333f', midtown: '#34373a', industrial: '#3a3b36', suburb: '#2f3c2f',
  waterfront: '#2f4048', residential: '#333a3a', park: '#243d29', airport: '#39382f',
};

export class UI {
  constructor(game) {
    this.game = game;
    this.el = {
      loading: $('loading'), menu: $('menu'), hud: $('hud'), overlayRoot: $('overlay-root'),
      notifications: $('notifications'), prompt: $('prompt'), promptText: $('prompt-text'),
      vehicleHud: $('vehicle-hud'), speed: $('speed'), dial: $('dial-fill'), vehName: $('veh-name'),
      fuelBar: $('fuel-bar'), hullBar: $('hull-bar'), money: $('money'), wantedStars: $('wanted-stars'),
      wantedChip: $('wanted-chip'), clock: $('clock'), weather: $('weather-label'), temp: $('temp-label'),
      daybar: $('daybar'), district: $('district-label'), objective: $('objective'),
      objTitle: $('obj-title'), objSub: $('obj-sub'), objDist: $('obj-dist'),
      minimap: $('minimap'), fullmap: $('fullmap'), mapPos: $('map-pos'),
      fade: $('fade'), toast: $('toast'), phoneTime: $('phone-time'), phoneCash: $('phone-cash'),
      phoneWelcome: $('phone-welcome'), phonePulse: $('phone-pulse'), jobsList: $('jobs-list'),
      garageList: $('garage-list'), shopList: $('shop-list'), settingsList: $('settings-list'),
      phoneActions: $('phone-actions'), modal: $('modal-inner'), damageFlash: $('damage-flash'),
      weatherFx: $('weather-fx'), controlsHint: $('controls-hint'),
    };
    this.notifications = [];
    this.overlay = null;
    this.mapCache = null;
    this.mapOpen = false;
    this.wantedStars = ['☆☆☆☆☆', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
    this.transit = null;
    this.gps = null;
    this.binding();
    this.updateSettingsUI();
  }

  binding() {
    const g = this.game;
    $('btn-start').addEventListener('click', () => {
      const picker = $('mode-picker');
      picker.classList.toggle('hidden');
    });
    document.querySelectorAll('[data-start-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        g.settings.mode = btn.dataset.startMode;
        g.saveSettings();
        g.startNewGame();
      });
    });
    $('btn-continue').addEventListener('click', () => g.continueGame());
    $('btn-settings-menu').addEventListener('click', () => this.openSettings());
    $('btn-resume').addEventListener('click', () => this.closeOverlay());
    $('btn-pause-save').addEventListener('click', () => { g.saveGame(); this.toast('Game saved to this browser'); });
    $('btn-pause-settings').addEventListener('click', () => this.openSettings());
    $('btn-pause-restart').addEventListener('click', () => g.startNewGame());
    $('btn-pause-menu').addEventListener('click', () => g.returnToMenu());
    document.querySelectorAll('[data-overlay]').forEach(btn => {
      btn.addEventListener('click', () => this.openOverlay(btn.dataset.overlay));
    });
    document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => this.closeOverlay()));
    document.querySelectorAll('.phone-apps button').forEach(btn => {
      btn.addEventListener('click', () => this.switchPhoneTab(btn.dataset.phoneTab));
    });
    this.el.fullmap.addEventListener('click', (e) => {
      const rect = this.el.fullmap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 1400;
      const y = (e.clientY - rect.top) / rect.height * 1000;
      const wx = (x - 700) / 1.0;
      const wz = (y - 500) / 1.0;
      this.gps = { x: clamp(wx, -650, 700), z: clamp(wz, -650, 500) };
      g.gps = this.gps;
      this.drawFullMap();
      this.toast('GPS waypoint set');
      g.audio?.click();
    });
    const languageSelect = $('language-select');
    if (languageSelect) {
      languageSelect.value = g.settings.language || 'en';
      languageSelect.addEventListener('change', () => {
        g.settings.language = languageSelect.value;
        this.applyLanguage();
        g.saveSettings();
        if (this.overlay === 'settings') this.buildSettings($('modal-settings') || $('settings-list'));
      });
    }
    this.bindTouchControls();
    this.applyLanguage();
    this.applyPlayMode();
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.overlay) { e.preventDefault(); this.closeOverlay(); }
        else if (this.game.mode !== 'menu') { e.preventDefault(); this.game.togglePause(); }
      }
    });
  }

  applyPlayMode() {
    const mode = this.game.settings.mode === 'phone' ? 'phone' : 'pc';
    document.body.classList.toggle('mode-phone', mode === 'phone');
    document.body.classList.toggle('mode-pc', mode === 'pc');
  }

  applyLanguage() {
    const lang = TEXT[this.game.settings.language] ? this.game.settings.language : 'en';
    this.game.settings.language = lang;
    document.documentElement.lang = lang;
    const dict = TEXT[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    const select = $('language-select');
    if (select) select.value = lang;
  }

  bindTouchControls() {
    const stick = $('touch-stick');
    const thumb = $('touch-stick-thumb');
    if (!stick) return;
    const updateStick = (e) => {
      const rect = stick.getBoundingClientRect();
      const touch = e.touches?.[0] || e;
      let x = (touch.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      let y = (touch.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const mag = Math.hypot(x, y);
      if (mag > 1) { x /= mag; y /= mag; }
      this.game.touch.x = x;
      this.game.touch.y = y;
      if (thumb) thumb.style.transform = `translate(${x * 28}px, ${y * 28}px)`;
    };
    const resetStick = () => {
      this.game.touch.x = 0; this.game.touch.y = 0;
      this.game.touch.sprint = false;
      if (thumb) thumb.style.transform = '';
    };
    stick.addEventListener('pointerdown', (e) => { stick.setPointerCapture?.(e.pointerId); updateStick(e); });
    stick.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'touch') updateStick(e); });
    stick.addEventListener('pointerup', resetStick);
    stick.addEventListener('pointercancel', resetStick);
    stick.addEventListener('lostpointercapture', resetStick);

    const lookStick = $('look-stick');
    const lookThumb = $('look-stick-thumb');
    if (lookStick) {
      const updateLookStick = (e) => {
        const rect = lookStick.getBoundingClientRect();
        let x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        let y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        const mag = Math.hypot(x, y);
        if (mag > 1) { x /= mag; y /= mag; }
        this.game.touch.lookX = x;
        this.game.touch.lookY = y;
        if (lookThumb) lookThumb.style.transform = `translate(${x * 28}px, ${y * 28}px)`;
      };
      const resetLookStick = () => {
        this.game.touch.lookX = 0;
        this.game.touch.lookY = 0;
        if (lookThumb) lookThumb.style.transform = '';
      };
      lookStick.addEventListener('pointerdown', (e) => { lookStick.setPointerCapture?.(e.pointerId); updateLookStick(e); });
      lookStick.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'touch') updateLookStick(e); });
      lookStick.addEventListener('pointerup', resetLookStick);
      lookStick.addEventListener('pointercancel', resetLookStick);
      lookStick.addEventListener('lostpointercapture', resetLookStick);
    }

    document.querySelectorAll('[data-touch-action]').forEach(btn => {
      const action = btn.dataset.touchAction;
      const press = (e) => {
        e.preventDefault();
        if (action === 'map') this.game.toggleOverlay('map');
        else if (action === 'phone') this.game.toggleOverlay('phone');
        else if (action === 'interact') this.game.interact();
        else if (action === 'exit') this.game.exitVehicle();
        else if (action === 'jump') this.game.touch.jump = true;
        else if (action === 'sprint') this.game.touch.sprint = true;
        else if (action === 'throttle') { this.game.touch.brake = false; this.game.touch.throttle = true; }
        else if (action === 'brake') { this.game.touch.throttle = false; this.game.touch.brake = true; }
      };
      const release = (e) => {
        e.preventDefault();
        if (action === 'jump') this.game.touch.jump = false;
        if (action === 'sprint') this.game.touch.sprint = false;
        if (action === 'throttle') this.game.touch.throttle = false;
        if (action === 'brake') this.game.touch.brake = false;
      };
      btn.addEventListener('pointerdown', press);
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointercancel', release);
      btn.addEventListener('lostpointercapture', release);
      btn.addEventListener('pointerleave', (e) => { if (e.buttons) release(e); });
    });
  }

  hideLoading() {
    this.el.loading.classList.add('out');
    setTimeout(() => this.el.loading.classList.add('hidden'), 900);
  }

  showMenu() {
    document.body.classList.remove('game-playing', 'ui-overlay-open');
    this.el.menu.classList.remove('hidden');
    requestAnimationFrame(() => this.el.menu.classList.add('on'));
    this.el.hud.classList.add('hidden');
    this.el.overlayRoot.classList.add('hidden');
    const saved = localStorage.getItem('novacity-save-v1');
    const cont = $('btn-continue');
    cont.disabled = !saved;
    $('continue-meta').textContent = saved ? 'Return to your saved life' : 'No saved city yet';
    this.el.menu.querySelectorAll('.menu-stats b')[0].textContent = '9';
  }

  hideMenu() {
    this.applyPlayMode();
    document.body.classList.add('game-playing');
    this.el.menu.classList.remove('on');
    setTimeout(() => this.el.menu.classList.add('hidden'), 700);
    this.el.hud.classList.remove('hidden');
  }

  showHUD() { this.el.hud.classList.remove('hidden'); }

  notify(text, kind = '') {
    if (this.notifications.length > 5) this.notifications.shift();
    const d = document.createElement('div');
    d.className = 'notification ' + kind;
    d.textContent = text;
    this.el.notifications.appendChild(d);
    this.notifications.push(d);
    while (this.el.notifications.children.length > 6) this.el.notifications.firstChild.remove();
    setTimeout(() => {
      d.style.transition = 'opacity .4s, transform .4s';
      d.style.opacity = '0'; d.style.transform = 'translateX(-10px)';
      setTimeout(() => d.remove(), 450);
    }, 5200);
    const idx = this.notifications.indexOf(d);
    if (idx >= 0) this.notifications.splice(idx, 1);
  }

  toast(text) {
    this.el.toast.textContent = text;
    this.el.toast.classList.remove('hidden');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.el.toast.classList.add('hidden'), 1800);
  }

  setPrompt(text) {
    if (!text) { this.el.prompt.classList.add('hidden'); return; }
    this.el.promptText.textContent = text;
    this.el.prompt.classList.remove('hidden');
  }

  updateMoney() {
    this.el.money.textContent = Math.round(this.game.money).toLocaleString('en-US');
    this.el.phoneCash.textContent = formatMoney(this.game.money);
  }

  updateWanted() {
    const l = this.game.wanted?.level || 0;
    this.el.wantedStars.textContent = this.wantedStars[l];
    this.el.wantedChip.classList.toggle('alert', l > 0);
    this.el.wantedChip.classList.toggle('dim', l === 0);
  }

  updateHUD(dt) {
    const g = this.game;
    if (!g.player) return;
    const hour = g.hour;
    this.el.clock.textContent = formatClock(hour);
    this.el.phoneTime.textContent = formatClock(hour);
    this.el.weather.textContent = { clear: 'Clear', rain: 'Rain', storm: 'Thunderstorm', snow: 'Snow', fog: 'Fog' }[g.weather] || 'Clear';
    this.el.temp.textContent = `${Math.round(g.temperature)}°C`;
    this.el.daybar.style.width = `${(hour / 24 * 100).toFixed(0)}%`;
    this.el.district.textContent = g.city.districtAt(g.player.pos.x, g.player.pos.z).toUpperCase();
    const driving = !!g.vehicles.playerVehicle;
    document.body.classList.toggle('phone-driving', driving);
    if (g.vehicles.playerVehicle) {
      const v = g.vehicles.playerVehicle;
      this.el.vehicleHud.classList.remove('hidden');
      this.el.speed.textContent = Math.round(v.speedKmh);
      const frac = clamp(Math.abs(v.speed) / v.cfg.maxSpeed, 0, 1);
      this.el.dial.style.strokeDashoffset = String(283 - 283 * frac * .97);
      this.el.dial.style.stroke = frac > .82 ? '#ffb457' : '#5be0ff';
      this.el.vehName.textContent = v.cfg.klass + ' · ' + (v.engineOn ? 'RUNNING' : 'OFF');
      this.el.fuelBar.style.width = `${clamp(v.fuel / v.cfg.fuel * 100, 0, 100)}%`;
      this.el.hullBar.style.width = `${v.health}%`;
      this.el.fuelBar.classList.toggle('low', v.fuel / v.cfg.fuel < .18);
      this.el.hullBar.classList.toggle('low', v.health < 30);
      this.el.controlsHint.classList.add('hidden');
      if (!this.transit) {
        this.el.vehicleHud.classList.remove('hidden');
      }
    } else {
      this.el.vehicleHud.classList.add('hidden');
      this.el.controlsHint.classList.remove('hidden');
    }
    if (g.player.firstPerson && !g.vehicles.playerVehicle) this.el.controlsHint.classList.add('hidden');
    else if (!g.vehicles.playerVehicle) this.el.controlsHint.classList.remove('hidden');
    this.drawMinimap(dt);
    if (this.overlay === 'map' && this.mapOpen) { /* drawn on open */ }
  }

  drawMinimap(dt) {
    const canvas = this.el.minimap;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const g = this.game, p = g.player;
    const W = canvas.width, H = canvas.height;
    const scale = 2.15;
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(W / 2, H / 2);
    // background
    ctx.fillStyle = '#111922'; ctx.fillRect(-W / 2, -H / 2, W, H);
    const toS = (x, z) => [(x - p.pos.x) * scale, (z - p.pos.z) * scale];
    // water
    const [wx, wy] = toS(0, 490);
    if (wy < H / 2) {
      ctx.fillStyle = '#0e3547';
      ctx.fillRect(-W / 2, wy, W, H / 2 - wy);
    }
    // blocks
    for (const b of g.city.blocks) {
      const [sx, sy] = toS(b.x, b.z);
      if (Math.abs(sx) > W / 2 + 60 || Math.abs(sy) > H / 2 + 60) continue;
      const size = 68 * scale;
      ctx.fillStyle = DISTRICT_COLORS[b.district] || '#2c3238';
      ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
      if (b.isPark) { ctx.fillStyle = '#2f5034'; ctx.fillRect(sx - size / 2, sy - size / 2, size, size); }
    }
    // roads
    ctx.strokeStyle = 'rgba(140,160,175,.32)';
    ctx.lineWidth = 8 * scale * .45;
    for (let i = 0; i < 9; i++) {
      const p0 = toS(NODE_POS(i), -CITY_EXTENT); const p1 = toS(NODE_POS(i), CITY_EXTENT);
      ctx.beginPath(); ctx.moveTo(p0[0], p0[1]); ctx.lineTo(p1[0], p1[1]); ctx.stroke();
      const q0 = toS(-CITY_EXTENT, NODE_POS(i)); const q1 = toS(CITY_EXTENT, NODE_POS(i));
      ctx.beginPath(); ctx.moveTo(q0[0], q0[1]); ctx.lineTo(q1[0], q1[1]); ctx.stroke();
    }
    // poi markers
    const near = g.city.pois.filter(poi => Math.hypot(poi.x - p.pos.x, poi.z - p.pos.z) < 140);
    for (const poi of near) {
      const [sx, sy] = toS(poi.x, poi.z);
      ctx.fillStyle = this.poiColor(poi.type);
      ctx.beginPath(); ctx.arc(sx, sy, 4.2, 0, Math.PI * 2); ctx.fill();
    }
    // events
    for (const m of g.events?.mapMarkers() || []) {
      const [sx, sy] = toS(m.x, m.z);
      if (Math.abs(sx) > W / 2 || Math.abs(sy) > H / 2) continue;
      ctx.fillStyle = m.type === 'fire' ? '#ff5b2a' : '#ffb457';
      ctx.beginPath(); ctx.arc(sx, sy, 5, 0, Math.PI * 2); ctx.fill();
    }
    // job
    if (g.jobs.current) {
      const t = g.jobs.current.stage === 'pickup' ? g.jobs.current.pickup : g.jobs.current.dropoff;
      const [sx, sy] = toS(t.x, t.z);
      ctx.fillStyle = '#ffb457'; ctx.beginPath(); ctx.arc(sx, sy, 5.5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,180,87,.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(sx, sy, 10, 0, Math.PI * 2); ctx.stroke();
    }
    if (this.gps) {
      const [sx, sy] = toS(this.gps.x, this.gps.z);
      ctx.strokeStyle = '#5be0ff'; ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(sx, sy); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#5be0ff'; ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();
    }
    // vehicles
    if (g.vehicles) for (const v of g.vehicles.vehicles) {
      const [sx, sy] = toS(v.pos.x, v.pos.z);
      if (Math.abs(sx) > W / 2 || Math.abs(sy) > H / 2) continue;
      if (v === g.vehicles.playerVehicle) continue;
      ctx.fillStyle = v.service ? (v.service === 'police' ? '#5b8fff' : v.service === 'fire' ? '#ff5b5b' : '#ffffff') : 'rgba(200,220,240,.42)';
      ctx.fillRect(sx - 2, sy - 2, 4, 4);
    }
    // player arrow
    ctx.save();
    ctx.rotate(-g.player.heading + Math.PI);
    ctx.fillStyle = '#5be0ff';
    ctx.shadowColor = '#5be0ff'; ctx.shadowBlur = 10;
    ctx.beginPath(); ctx.moveTo(0, 8); ctx.lineTo(-5, -6); ctx.lineTo(0, -3); ctx.lineTo(5, -6); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.restore();
    // ring vignette
    const grad = ctx.createRadialGradient(W / 2, H / 2, W * .34, W / 2, H / 2, W * .5);
    grad.addColorStop(0, 'rgba(0,0,0,0)'); grad.addColorStop(1, 'rgba(5,9,15,.72)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  }

  poiColor(type) {
    return { police: '#5b8fff', fire: '#ff5b5b', hospital: '#63f0d0', garage: '#ffb457', dealership: '#5be0ff', shop: '#9be36b', apartment: '#e8d28a', metro: '#b18cff', monorail: '#b18cff', train: '#b18cff', park: '#63f0b0', marina: '#5bc8ff', airport: '#d7eaff', hotel: '#ffcf7a', office: '#8fa8c0' }[type] || '#c8d8e8';
  }

  buildMapCache() {
    if (this.mapCache) return;
    const c = document.createElement('canvas'); c.width = 1400; c.height = 1000;
    const ctx = c.getContext('2d');
    const g = this.game;
    ctx.fillStyle = '#0b121b'; ctx.fillRect(0, 0, 1400, 1000);
    const toP = (x, z) => [x + 700, z + 500];
    // water
    ctx.fillStyle = '#0d2c3d'; ctx.fillRect(0, 986, 1400, 200);
    ctx.fillStyle = '#3b4330'; ctx.fillRect(0, 0, 1400, 1000);
    // blocks
    const blockSize = 80;
    for (const b of g.city.blocks) {
      const [x, y] = toP(b.x, b.z);
      ctx.fillStyle = b.isPark ? '#24472c' : (DISTRICT_COLORS[b.district] || '#2f353b');
      ctx.fillRect(x - blockSize / 2, y - blockSize / 2, blockSize, blockSize);
      if (b.district === 'downtown') {
        ctx.fillStyle = 'rgba(180,210,235,.09)';
        ctx.fillRect(x - 20, y - 20, 40, 40);
      }
    }
    // roads
    ctx.strokeStyle = '#4a5259'; ctx.lineWidth = 15; ctx.lineCap = 'butt';
    for (let i = 0; i < 9; i++) {
      let [x, y] = toP(NODE_POS(i), -CITY_EXTENT); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 2 * CITY_EXTENT); ctx.stroke();
      let [x2, y2] = toP(-CITY_EXTENT, NODE_POS(i)); ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 + 2 * CITY_EXTENT, y2); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(230,230,210,.18)'; ctx.lineWidth = 1; ctx.setLineDash([6, 8]);
    for (let i = 0; i < 9; i++) {
      let [x, y] = toP(NODE_POS(i), -CITY_EXTENT); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 2 * CITY_EXTENT); ctx.stroke();
      let [x2, y2] = toP(-CITY_EXTENT, NODE_POS(i)); ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 + 2 * CITY_EXTENT, y2); ctx.stroke();
    }
    ctx.setLineDash([]);
    // elevated monorail
    ctx.strokeStyle = 'rgba(177,140,255,.4)'; ctx.lineWidth = 3;
    ctx.strokeRect(700 - 250, 500 - 250, 500, 500);
    // rail
    ctx.strokeStyle = 'rgba(220,180,90,.5)'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(0, 54); ctx.lineTo(1400, 54); ctx.stroke();
    // airport
    ctx.strokeStyle = '#5d5d5d'; ctx.lineWidth = 26;
    ctx.beginPath(); ctx.moveTo(1370, 340); ctx.lineTo(1370, 660); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 2; ctx.setLineDash([10, 12]);
    ctx.beginPath(); ctx.moveTo(1370, 340); ctx.lineTo(1370, 660); ctx.stroke(); ctx.setLineDash([]);
    // block labels
    ctx.fillStyle = 'rgba(190,215,240,.28)'; ctx.font = '600 11px Inter, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('DOWNTOWN', 700, 490);
    ctx.fillText('INDUSTRIAL', 500, 185);
    ctx.fillText('PINE HILLS', 1080, 430);
    ctx.fillText('WEST END', 250, 560);
    ctx.fillText('HARBORFRONT', 700, 905);
    // POIs
    for (const p of g.city.pois) {
      const [x, y] = toP(p.x, p.z);
      ctx.fillStyle = this.poiColor(p.type);
      ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(220,238,255,.7)'; ctx.font = '500 9px Inter, sans-serif';
      ctx.fillText(p.name.toUpperCase(), x, y - 10);
    }
    this.mapCache = c;
  }

  drawFullMap() {
    this.buildMapCache();
    const canvas = this.el.fullmap;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.mapCache, 0, 0);
    const g = this.game;
    const toP = (x, z) => [x + 700, z + 500];
    // plot transit stations
    for (const s of g.city.monorail.stations) {
      const [x, y] = toP(s.x, s.z);
      ctx.strokeStyle = '#b18cff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#b18cff'; ctx.font = '600 10px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('M', x, y + 4);
    }
    // events
    for (const m of g.events.mapMarkers()) {
      const [x, y] = toP(m.x, m.z);
      ctx.fillStyle = m.type === 'fire' ? '#ff5b2a' : '#ffb457';
      ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,180,87,.4)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 15 + Math.sin(performance.now() * .003) * 3, 0, Math.PI * 2); ctx.stroke();
    }
    // job
    if (g.jobs.current) {
      const t = g.jobs.current.stage === 'pickup' ? g.jobs.current.pickup : g.jobs.current.dropoff;
      const [x, y] = toP(t.x, t.z);
      ctx.fillStyle = '#ffb457'; ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0a1018'; ctx.font = '700 12px Inter'; ctx.textAlign = 'center'; ctx.fillText('!', x, y + 4);
    }
    if (this.gps) {
      const [x, y] = toP(this.gps.x, this.gps.z);
      ctx.strokeStyle = '#5be0ff'; ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
      const [px, py] = toP(g.player.pos.x, g.player.pos.z);
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fillStyle = '#5be0ff'; ctx.fill();
    }
    // player
    const [px, py] = toP(g.player.pos.x, g.player.pos.z);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-g.player.heading + Math.PI);
    ctx.fillStyle = '#5be0ff'; ctx.shadowColor = '#5be0ff'; ctx.shadowBlur = 16;
    ctx.beginPath(); ctx.moveTo(0, 14); ctx.lineTo(-9, -9); ctx.lineTo(0, -4); ctx.lineTo(9, -9); ctx.closePath(); ctx.fill();
    ctx.restore();
    this.el.mapPos.textContent = `${Math.round(g.player.pos.x)}, ${Math.round(g.player.pos.z)} · ${g.city.districtAt(g.player.pos.x, g.player.pos.z)}`;
  }

  openOverlay(name) {
    if (!name) return;
    this.overlay = name;
    document.body.classList.add('ui-overlay-open');
    this.el.overlayRoot.classList.remove('hidden');
    this.el.overlayRoot.querySelectorAll('.overlay-panel').forEach(p => p.classList.add('hidden'));
    const panel = this.el.overlayRoot.querySelector(`[data-panel="${name}"]`);
    if (panel) panel.classList.remove('hidden');
    if (name === 'phone') { this.refreshPhone(); }
    if (name === 'map') { this.mapOpen = true; this.drawFullMap(); }
    if (name === 'pause') { this.game.paused = true; }
    if (name !== 'pause') this.game.paused = true;
    this.game.audio?.click();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  closeOverlay() {
    this.overlay = null;
    this.mapOpen = false;
    document.body.classList.remove('ui-overlay-open');
    this.el.overlayRoot.classList.add('hidden');
    this.game.paused = false;
    this.game.touch.x = 0;
    this.game.touch.y = 0;
    this.game.touch.sprint = false;
    this.game.touch.jump = false;
    this.game.keys.clear();
    this.game.audio?.click();
  }

  openSettings() {
    this.openOverlay('modal');
    this.el.overlayRoot.querySelector('[data-panel="phone"]')?.classList.add('hidden');
    this.el.overlayRoot.querySelector('[data-panel="modal"]')?.classList.remove('hidden');
    this.el.modal.innerHTML = `
      <div class="kicker">SYSTEM</div><h2>Settings</h2>
      <div class="modal-body"><div id="modal-settings" class="settings-list"></div></div>
      <div class="modal-actions"><button id="modal-close-btn" class="btn primary"><span>Apply & Close</span><small>Back to Nova City</small></button></div>`;
    this.buildSettings($('modal-settings'));
    $('modal-close-btn').addEventListener('click', () => { this.closeOverlay(); this.updateSettingsUI(); });
    this.overlay = 'settings';
  }

  switchPhoneTab(tab) {
    document.querySelectorAll('.phone-apps button').forEach(b => b.classList.toggle('active', b.dataset.phoneTab === tab));
    for (const id of ['home', 'jobs', 'garage', 'shop', 'settings']) {
      $('phone-' + id).classList.toggle('hidden', id !== tab);
    }
    if (tab === 'jobs') this.refreshJobs();
    if (tab === 'garage') this.refreshGarage();
    if (tab === 'shop') this.refreshShop();
    if (tab === 'settings') this.buildSettings($('settings-list'));
    this.game.audio?.click();
  }

  refreshPhone() {
    const g = this.game;
    this.updateMoney();
    if (g.jobs.current) {
      this.el.phoneWelcome.textContent = `${g.jobs.current.title} · ${g.jobs.current.stage === 'pickup' ? 'Pick up cargo' : 'Deliver to destination'}`;
    } else {
      this.el.phoneWelcome.textContent = 'The city is awake. Find work, buy a car, or just drive.';
    }
    const pulse = this.el.phonePulse;
    pulse.innerHTML = `
      <div><span>Wanted</span><b>${this.wantedStars[g.wanted.level]}</b></div>
      <div><span>Weather</span><b>${g.weather.toUpperCase()}</b></div>
      <div><span>Time</span><b>${formatClock(g.hour)}</b></div>
      <div><span>Active events</span><b>${g.events.events.filter(e => e.active).length}</b></div>
      <div><span>Owned vehicles</span><b>${g.ownedVehicles.length}</b></div>`;
    const actions = this.el.phoneActions;
    actions.innerHTML = `
      <button data-phone-action="job">Find work</button>
      <button data-phone-action="garage">Track vehicle</button>
      <button data-phone-action="map">Open city map</button>
      <button data-phone-action="save">Save game</button>`;
    actions.querySelectorAll('[data-phone-action]').forEach(b => b.addEventListener('click', () => {
      const act = b.dataset.phoneAction;
      if (act === 'map') this.openOverlay('map');
      else if (act === 'save') { g.saveGame(); this.toast('Game saved'); }
      else if (act === 'job') this.switchPhoneTab('jobs');
      else if (act === 'garage') this.switchPhoneTab('garage');
    }));
    this.switchPhoneTab('home');
  }

  refreshJobs() {
    const g = this.game;
    const html = g.jobs.offers.map(o => `
      <div class="list-item">
        <div class="li-top"><b>${o.title}</b><span class="price">${formatMoney(o.pay)}</span></div>
        <p>${o.desc}</p>
        <div class="meta">${o.pickupName} → ${o.dropName}${o.require ? ' · requires ' + o.require[0] : ''}</div>
        <div class="li-row"><span class="meta">${g.jobs.current ? 'Job active' : 'Available now'}</span>
        <button class="act" data-job="${o.uid}" ${g.jobs.current ? 'disabled' : ''}>Accept job</button></div>
      </div>`).join('');
    this.el.jobsList.innerHTML = html;
    this.el.jobsList.querySelectorAll('[data-job]').forEach(b => b.addEventListener('click', () => {
      g.jobs.start(b.dataset.job);
      this.refreshJobs();
      this.closeOverlay();
    }));
  }

  refreshGarage() {
    const g = this.game;
    const owned = g.ownedVehicles;
    let html = '';
    if (!owned.length) html = `<div class="list-item"><p>No owned vehicles. Visit Nova Motors to buy one, or find a car in the city.</p></div>`;
    for (const [i, v] of owned.entries()) {
      const cfg = v;
      html += `<div class="list-item">
        <div class="li-top"><b>${cfg.name}</b><span class="price">${formatMoney(cfg.price)}</span></div>
        <p>${cfg.klass} · max ${Math.round(cfg.maxSpeed * 3.6)} km/h · ${cfg.seats} seats</p>
        <div class="li-row"><span class="meta">${cfg.fuel} L tank</span><button class="act" data-track="${i}">Track & recall</button></div>
      </div>`;
    }
    this.el.garageList.innerHTML = html;
    this.el.garageList.querySelectorAll('[data-track]').forEach(b => b.addEventListener('click', () => {
      g.recallVehicle(parseInt(b.dataset.track));
      this.closeOverlay();
    }));
  }

  refreshShop() {
    const items = [
      { id: 'coffee', name: 'Coffee', desc: 'A small pick-me-up while exploring.', price: 6 },
      { id: 'sandwich', name: 'Deli sandwich', desc: 'Restores a little health.', price: 12 },
      { id: 'medkit', name: 'First aid kit', desc: 'Restores full health.', price: 45 },
      { id: 'fuelcan', name: 'Fuel can (20 L)', desc: 'Refuel your current vehicle.', price: 32 },
      { id: 'jacket', name: 'Nova field jacket', desc: 'Change your jacket color.', price: 60 },
      { id: 'pants', name: 'Utility trousers', desc: 'Change your trousers.', price: 45 },
      { id: 'metrocard', name: 'Metro pass', desc: 'Five metro rides, no fare.', price: 25 },
    ];
    this.el.shopList.innerHTML = items.map(i => `
      <div class="list-item"><div class="li-top"><b>${i.name}</b><span class="price">${formatMoney(i.price)}</span></div>
      <p>${i.desc}</p><div class="li-row"><span class="meta">Convenience store</span><button class="act" data-buy="${i.id}">Buy</button></div></div>`).join('');
    this.el.shopList.querySelectorAll('[data-buy]').forEach(b => b.addEventListener('click', () => {
      this.game.buyItem(b.dataset.buy);
      this.refreshShop();
    }));
  }

  buildSettings(container) {
    if (!container) return;
    const s = this.game.settings;
    container.innerHTML = `
      <div class="setting-row"><span>Graphics quality</span><select data-set="quality">
        <option value="low" ${s.quality === 'low' ? 'selected' : ''}>Low</option>
        <option value="medium" ${s.quality === 'medium' ? 'selected' : ''}>Medium</option>
        <option value="high" ${s.quality === 'high' ? 'selected' : ''}>High</option>
      </select></div>
      <div class="setting-row"><span>Shadows</span><select data-set="shadows">
        <option value="on" ${s.shadows ? 'selected' : ''}>On</option>
        <option value="off" ${!s.shadows ? 'selected' : ''}>Off</option>
      </select></div>
      <div class="setting-row"><span>Master volume</span><input data-set="volume" type="range" min="0" max="100" value="${Math.round(s.volume * 100)}"></div>
      <div class="setting-row"><span>Invert camera Y</span><select data-set="invert">
        <option value="no" ${!s.invert ? 'selected' : ''}>No</option><option value="yes" ${s.invert ? 'selected' : ''}>Yes</option>
      </select></div>
      <div class="setting-row"><span>Time of day</span><select data-set="time">
        <option value="dawn" ${s.time === 'dawn' ? 'selected' : ''}>Dawn</option>
        <option value="day" ${s.time === 'day' ? 'selected' : ''}>Day</option>
        <option value="dusk" ${s.time === 'dusk' ? 'selected' : ''}>Dusk</option>
        <option value="night" ${s.time === 'night' ? 'selected' : ''}>Night</option>
      </select></div>
      <div class="setting-row"><span>Camera FOV</span><input data-set="fov" type="range" min="55" max="90" value="${s.fov}"></div>
      <div class="setting-row"><span>${TEXT[this.game.settings.language]?.language || 'Language'}</span><select data-set="language">
        <option value="en" ${s.language === 'en' ? 'selected' : ''}>English</option>
        <option value="ru" ${s.language === 'ru' ? 'selected' : ''}>Русский</option>
        <option value="zh" ${s.language === 'zh' ? 'selected' : ''}>中文</option>
      </select></div>
      <div class="setting-row"><span>${TEXT[this.game.settings.language]?.chooseControls || 'Play mode'}</span><select data-set="mode">
        <option value="pc" ${s.mode === 'pc' ? 'selected' : ''}>PC</option>
        <option value="phone" ${s.mode === 'phone' ? 'selected' : ''}>Phone</option>
      </select></div>
      <div class="setting-row"><span>Reset save data</span><button data-reset="1">Clear save</button></div>`;
    container.querySelectorAll('[data-set]').forEach(el => {
      el.addEventListener('change', () => {
        const k = el.dataset.set;
        if (k === 'quality') this.game.setQuality(el.value);
        if (k === 'shadows') this.game.settings.shadows = el.value === 'on';
        if (k === 'volume') { this.game.settings.volume = parseInt(el.value) / 100; this.game.audio?.setVolume(this.game.settings.volume); }
        if (k === 'invert') this.game.settings.invert = el.value === 'yes';
        if (k === 'time') this.game.setTimeOfDay(el.value);
        if (k === 'fov') { this.game.settings.fov = parseInt(el.value); this.game.camera.fov = parseInt(el.value); this.game.camera.updateProjectionMatrix(); }
        if (k === 'language') {
          this.game.settings.language = el.value;
          this.applyLanguage();
        }
        if (k === 'mode') {
          this.game.settings.mode = el.value === 'phone' ? 'phone' : 'pc';
          this.applyPlayMode();
        }
        this.game.saveSettings();
        if (k === 'language') this.buildSettings(container);
        this.game.audio?.click();
      });
      if (el.type === 'range') el.addEventListener('input', () => {
        const k = el.dataset.set;
        if (k === 'volume') { this.game.settings.volume = parseInt(el.value) / 100; this.game.audio?.setVolume(this.game.settings.volume); }
        if (k === 'fov') { this.game.settings.fov = parseInt(el.value); this.game.camera.fov = parseInt(el.value); this.game.camera.updateProjectionMatrix(); }
        this.game.saveSettings();
      });
    });
    container.querySelector('[data-reset]')?.addEventListener('click', () => {
      localStorage.removeItem('novacity-save-v1');
      this.toast('Save data cleared');
      this.showMenu();
      this.closeOverlay();
    });
  }

  updateSettingsUI() {
    const s = this.game.settings;
    this.game.audio?.setVolume(s.volume);
  }

  showObjective() { this.el.objective.classList.remove('hidden'); }
  hideObjective() { this.el.objective.classList.add('hidden'); }
  updateObjective(job, dist) {
    if (!job) return;
    this.el.objTitle.textContent = job.stage === 'pickup' ? job.title : 'Deliver to ' + job.dropName;
    this.el.objSub.textContent = job.stage === 'pickup' ? 'Pick up · ' + job.pickupName : 'Drop off · ' + job.dropName;
    this.el.objDist.textContent = Math.round(dist) + ' m away · ' + formatMoney(job.pay);
    this.showObjective();
  }

  showTransit(line, route, mode) {
    if (!this.transit) {
      const el = document.createElement('div');
      el.className = 'transit-hud glass';
      el.innerHTML = `<div class="tr-line" id="tr-line">MONORAIL</div><div class="tr-route" id="tr-route">Aurora Loop</div>
        <div class="tr-main"><b id="tr-speed">0</b><span>km/h</span></div>
        <div class="tr-mode" id="tr-mode">Automatic</div>
        <div class="tr-hint" id="tr-hint">E exit · T manual</div>`;
      this.el.hud.appendChild(el);
      this.transit = el;
      el.style.cssText = 'position:absolute;left:50%;bottom:26px;transform:translateX(-50%);padding:12px 22px;border-radius:14px;text-align:center;min-width:200px;';
    }
    this.transit.classList.remove('hidden');
    $('tr-line').textContent = line;
    $('tr-route').textContent = route;
    $('tr-mode').textContent = mode;
    if (mode.includes('Manual')) $('tr-hint').textContent = 'W/S throttle · Space brake · T auto · E exit';
    else $('tr-hint').textContent = 'E exit at station · T manual control';
    this.el.vehicleHud.classList.add('hidden');
  }

  updateTransitSpeed(speed, station) {
    if (!this.transit) return;
    $('tr-speed').textContent = Math.round(Math.abs(speed) * 3.6);
    $('tr-mode').textContent = station;
  }

  updateTransitMode(mode, hint) {
    if (!this.transit) return;
    $('tr-mode').textContent = mode;
    if (hint) $('tr-hint').textContent = hint;
  }

  hideTransit() {
    if (this.transit) {
      this.transit.remove();
      this.transit = null;
    }
  }

  showModal({ kicker = 'NOVA CITY', title = '', body = '', actions = [] }) {
    this.openOverlay('modal');
    this.el.modal.innerHTML = `<div class="kicker">${kicker}</div><h2>${title}</h2><div class="modal-body">${body}</div><div class="modal-actions" id="modal-actions"></div>`;
    const acts = $('modal-actions');
    for (const a of actions) {
      const b = document.createElement('button');
      b.className = 'btn ' + (a.primary ? 'primary' : 'ghost');
      b.innerHTML = `<span>${a.label}</span>${a.sub ? `<small>${a.sub}</small>` : ''}`;
      b.addEventListener('click', () => { a.onClick?.(); });
      acts.appendChild(b);
    }
    this.overlay = 'modal';
  }

  showBusted() {
    this.toast('BUSTED — NCPD impounded your vehicle');
    this.el.damageFlash.classList.add('on');
    setTimeout(() => this.el.damageFlash.classList.remove('on'), 900);
  }

  setWeatherFx(weather) {
    this.el.weatherFx.className = 'weather-fx';
    if (weather === 'rain' || weather === 'storm') this.el.weatherFx.classList.add('rain');
    if (weather === 'snow') this.el.weatherFx.classList.add('snow');
  }

  damageFlash() {
    this.el.damageFlash.classList.add('on');
    clearTimeout(this.damageTimer);
    this.damageTimer = setTimeout(() => this.el.damageFlash.classList.remove('on'), 140);
  }
}
