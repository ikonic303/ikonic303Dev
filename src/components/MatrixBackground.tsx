import { useEffect, useRef } from 'react';

/**
 * Ambient background for ikonic303.dev — a slow, low-contrast node mesh on dark
 * navy. It reads as "systems / infrastructure" without the noise of the old
 * katakana matrix rain. Respects prefers-reduced-motion (renders one static
 * frame) and pauses when the tab is hidden.
 *
 * The component is still named MatrixBackground so every existing import keeps
 * working; only the visual is new.
 */
export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth <= 768;
    const dpr = window.devicePixelRatio || 1;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Node field
    const count = mobile ? 26 : 60;
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }));

    const LINK_DIST = mobile ? 130 : 170;
    const GREEN = '0, 255, 157';

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(30, 42, 68, 0.55)';
      ctx.lineWidth = 1;
      const step = 64;
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      // Navy base + faint vignette
      ctx.fillStyle = '#0A0E1A';
      ctx.fillRect(0, 0, w, h);
      drawGrid();

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16;
            ctx.strokeStyle = `rgba(${GREEN}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${GREEN}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => {
      if (!document.hidden) render();
      raf = requestAnimationFrame(loop);
    };

    if (reduceMotion) {
      render();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.9, zIndex: 0, background: '#0A0E1A' }}
      aria-hidden="true"
    />
  );
}
