import * as THREE from 'three';
import { makeRng, canvasTexture } from './utils.js';

function noiseFill(ctx, w, h, base, dots, rng) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < dots; i++) {
    const x = rng() * w, y = rng() * h;
    const a = rng() * 0.09;
    ctx.fillStyle = rng() > 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
    ctx.fillRect(x, y, 1 + rng() * 2, 1 + rng() * 2);
  }
}

export function asphaltTexture(seed = 4) {
  const rng = makeRng(seed);
  return canvasTexture(256, 256, (ctx, w, h) => {
    noiseFill(ctx, w, h, '#22252b', 5200, rng);
    ctx.strokeStyle = 'rgba(0,0,0,.22)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      let x = rng() * w, y = rng() * h;
      ctx.moveTo(x, y);
      for (let j = 0; j < 4; j++) { x += rng() * 30 - 15; y += rng() * 30; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.02 + rng() * 0.03})`;
      ctx.fillRect(rng() * w, rng() * h, rng() * 20 + 3, 1);
    }
  });
}

export function concreteTexture(seed = 7, base = '#777a7b') {
  const rng = makeRng(seed);
  return canvasTexture(256, 256, (ctx, w, h) => {
    noiseFill(ctx, w, h, base, 3600, rng);
    ctx.strokeStyle = 'rgba(0,0,0,.18)';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(255,255,255,.05)';
    ctx.strokeRect(1, 1, w - 2, h - 2);
  });
}

export function grassTexture(seed = 11) {
  const rng = makeRng(seed);
  return canvasTexture(256, 256, (ctx, w, h) => {
    noiseFill(ctx, w, h, '#4b633c', 9000, rng);
    for (let i = 0; i < 700; i++) {
      ctx.strokeStyle = `rgba(${40 + rng() * 50},${75 + rng() * 60},${35 + rng() * 30},${0.3 + rng() * 0.5})`;
      ctx.beginPath();
      const x = rng() * w, y = rng() * h;
      ctx.moveTo(x, y); ctx.lineTo(x + rng() * 3 - 1.5, y - 2 - rng() * 4); ctx.stroke();
    }
  });
}

export function sandTexture(seed = 15) {
  const rng = makeRng(seed);
  return canvasTexture(256, 256, (ctx, w, h) => {
    noiseFill(ctx, w, h, '#b9a67c', 8500, rng);
    for (let i = 0; i < 80; i++) {
      ctx.strokeStyle = `rgba(90,70,45,${0.08 + rng() * 0.1})`;
      ctx.beginPath();
      const y = rng() * h;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(w * .3, y + rng() * 12, w * .6, y - rng() * 12, w, y + rng() * 8);
      ctx.stroke();
    }
  });
}

export function facadeTextures(baseHex, winHex, litHex, seed, style = 'glass') {
  const diffuse = canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, w, h);
    const rng = makeRng(seed);
    // subtle vertical facade bands
    for (let x = 0; x < 4; x++) {
      ctx.fillStyle = `rgba(255,255,255,${0.015 + rng() * 0.02})`;
      ctx.fillRect(x * 64 + 2, 0, 60, h);
    }
    for (let fy = 0; fy < 4; fy++) {
      for (let fx = 0; fx < 4; fx++) {
        const x = fx * 64 + 11, y = fy * 64 + 9, ww = 42, hh = 38;
        const g = ctx.createLinearGradient(x, y, x + ww, y + hh);
        g.addColorStop(0, winHex);
        g.addColorStop(0.55, '#1a222c');
        g.addColorStop(1, '#0c1118');
        ctx.fillStyle = g;
        ctx.fillRect(x, y, ww, hh);
        ctx.fillStyle = 'rgba(190,225,255,.12)';
        ctx.fillRect(x + 2, y + 2, ww - 4, 2);
        ctx.fillStyle = 'rgba(0,0,0,.32)';
        ctx.fillRect(x + ww / 2 - 1, y, 2, hh);
        const shade = rng();
        if (shade > 0.64) { ctx.fillStyle = `rgba(240,245,255,${0.05 + rng() * 0.09})`; ctx.fillRect(x, y, ww, hh); }
        if (style === 'brick') {
          ctx.fillStyle = 'rgba(255,255,255,.06)';
          for (let b = y; b < y + hh; b += 7) ctx.fillRect(x, b, ww, 1);
        }
      }
      ctx.fillStyle = 'rgba(0,0,0,.23)';
      ctx.fillRect(0, fy * 64 + 59, w, 5);
    }
  });
  const emissive = canvasTexture(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    const rng = makeRng(seed + 871);
    for (let fy = 0; fy < 4; fy++) {
      for (let fx = 0; fx < 4; fx++) {
        if (rng() > 0.42) continue;
        const x = fx * 64 + 11, y = fy * 64 + 9;
        const warm = rng() > 0.25;
        ctx.fillStyle = warm ? litHex : '#b8dfff';
        ctx.globalAlpha = 0.35 + rng() * 0.65;
        ctx.fillRect(x + 1, y + 1, 40, 36);
      }
    }
    ctx.globalAlpha = 1;
  });
  return { diffuse, emissive };
}

export function signTexture(text, bg, fg, sub = '') {
  return canvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(255,255,255,.25)';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.fillStyle = fg;
    ctx.font = '700 92px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 - (sub ? 18 : 0));
    if (sub) {
      ctx.font = '500 26px Inter, sans-serif';
      ctx.globalAlpha = 0.7;
      ctx.fillText(sub, w / 2, h / 2 + 66);
    }
  });
}

export function billboardTexture(title, sub, bg1, bg2) {
  return canvasTexture(512, 256, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, bg1); g.addColorStop(1, bg2);
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 14; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.04})`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 80, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,.92)';
    ctx.font = '700 64px Space Grotesk, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(title, 40, 128);
    ctx.fillStyle = 'rgba(255,255,255,.62)';
    ctx.font = '500 22px Inter, sans-serif';
    ctx.fillText(sub, 42, 168);
    ctx.fillStyle = 'rgba(255,255,255,.2)';
    ctx.fillRect(40, 190, 150, 3);
  });
}

export function cloudTexture() {
  return canvasTexture(256, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 26; i++) {
      const x = 30 + Math.random() * (w - 60);
      const y = h * 0.55 + (Math.random() - 0.5) * h * 0.4;
      const r = 14 + Math.random() * 34;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,.5)');
      g.addColorStop(0.6, 'rgba(240,245,255,.22)');
      g.addColorStop(1, 'rgba(240,245,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  });
}

export function glowTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.28, 'rgba(255,226,170,.7)');
    g.addColorStop(1, 'rgba(255,200,100,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export function smokeTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,.55)');
    g.addColorStop(0.5, 'rgba(210,215,225,.25)');
    g.addColorStop(1, 'rgba(200,205,215,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export function starTexture() {
  return canvasTexture(32, 32, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.35, 'rgba(210,230,255,.6)');
    g.addColorStop(1, 'rgba(210,230,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  });
}

export function roadMaterialSet() {
  const asphalt = asphaltTexture();
  const side = concreteTexture(7, '#8b8d8c');
  asphalt.repeat.set(3, 150);
  side.repeat.set(1.2, 160);
  return {
    asphalt: new THREE.MeshStandardMaterial({ map: asphalt, color: 0xffffff, roughness: 0.94, metalness: 0.02 }),
    sidewalk: new THREE.MeshStandardMaterial({ map: side, color: 0xffffff, roughness: 0.92 }),
    lot: new THREE.MeshStandardMaterial({ map: concreteTexture(9, '#85847f'), roughness: 0.98 }),
    grass: new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 1 }),
    sand: new THREE.MeshStandardMaterial({ map: sandTexture(), roughness: 1 }),
  };
}
