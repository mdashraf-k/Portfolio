import React, { useEffect, useRef } from 'react';

export default function GeometricCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Click shockwaves array
    const shockwaves = [];
    const handleClick = (e) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 180,
        alpha: 1,
        angle: Math.random() * Math.PI,
      });

      // Also push nearby nodes outward
      nodes.forEach((node) => {
        const dx = node.x - e.clientX;
        const dy = node.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          node.vx += (dx / dist) * 4;
          node.vy += (dy / dist) * 4;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Floating technical geometric nodes across whole screen
    const numNodes = Math.min(45, Math.max(25, Math.floor(width / 30)));
    const nodes = [];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 2,
        id: `N-${String(i + 1).padStart(2, '0')}`,
      });
    }

    // Data flow packets
    const packets = [];
    for (let i = 0; i < 8; i++) {
      packets.push({
        from: Math.floor(Math.random() * numNodes),
        to: Math.floor(Math.random() * numNodes),
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008,
      });
    }

    let rotationAngle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lag target for magnetic outer ring
      mouse.targetX += (mouse.x - mouse.targetX) * 0.15;
      mouse.targetY += (mouse.y - mouse.targetY) * 0.15;
      rotationAngle += 0.01;

      const strokeColor = 'rgba(0, 0, 0, 0.12)';
      const activeLineColor = 'rgba(0, 0, 0, 0.45)';
      const nodeColor = '#000000';
      const accentColor = 'rgba(0, 0, 0, 0.9)';
      const telemetryColor = 'rgba(0, 0, 0, 0.8)';

      // 1. Render Click Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 6;
        sw.alpha -= 0.025;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.strokeStyle = `rgba(0, 0, 0, ${sw.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Square blueprint border around shockwave
        ctx.strokeRect(
          sw.x - sw.radius * 0.7,
          sw.y - sw.radius * 0.7,
          sw.radius * 1.4,
          sw.radius * 1.4
        );
        ctx.restore();
      }

      // 2. Draw connecting vector lines between nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            const alpha = (1 - dist / 170) * 0.25;
            ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw animated packets along vector lines
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.from = Math.floor(Math.random() * nodes.length);
          packet.to = Math.floor(Math.random() * nodes.length);
        }

        const start = nodes[packet.from];
        const end = nodes[packet.to];
        if (start && end) {
          const px = start.x + (end.x - start.x) * packet.progress;
          const py = start.y + (end.y - start.y) * packet.progress;

          ctx.fillStyle = accentColor;
          ctx.fillRect(px - 2, py - 2, 4, 4);

          ctx.strokeStyle = activeLineColor;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px - (end.x - start.x) * 0.08, py - (end.y - start.y) * 0.08);
          ctx.stroke();
        }
      });

      // 4. Update & Render Nodes (Physics & Mouse Attraction)
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce borders
        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Mouse attraction / push
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.radius) {
          const angle = Math.atan2(mdy, mdx);
          const force = (mouse.radius - mdist) / mouse.radius;

          // Pull slightly toward cursor
          node.x += Math.cos(angle) * force * 1.2;
          node.y += Math.sin(angle) * force * 1.2;

          // Vector line to cursor
          const lineAlpha = (1 - mdist / mouse.radius) * 0.5;
          ctx.strokeStyle = `rgba(0, 0, 0, ${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw node (Brutalist square shape)
        ctx.fillStyle = nodeColor;
        ctx.fillRect(node.x - node.size / 2, node.y - node.size / 2, node.size, node.size);

        // Highlight square around nodes inside cursor radius
        if (mdist < mouse.radius) {
          ctx.strokeStyle = activeLineColor;
          ctx.strokeRect(node.x - 6, node.y - 6, 12, 12);
        }
      });

      // 5. Whole-Page Floating Geometric Cursor Reticle & Telemetry
      const cx = mouse.x;
      const cy = mouse.y;

      ctx.save();
      // Primary Reticle Circle
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Center Dot
      ctx.fillStyle = accentColor;
      ctx.fillRect(cx - 2, cy - 2, 4, 4);

      // Rotating Outer Geometric Diamond
      ctx.translate(cx, cy);
      ctx.rotate(rotationAngle);
      ctx.strokeStyle = activeLineColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(-18, -18, 36, 36);
      ctx.restore();

      // Lagging Trailing Ring
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      ctx.arc(mouse.targetX, mouse.targetY, 28, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshairs (+) Line Segments
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - 28, cy);
      ctx.lineTo(cx - 16, cy);
      ctx.moveTo(cx + 16, cy);
      ctx.lineTo(cx + 28, cy);
      ctx.moveTo(cx, cy - 28);
      ctx.lineTo(cx, cy - 16);
      ctx.moveTo(cx, cy + 16);
      ctx.lineTo(cx, cy + 28);
      ctx.stroke();

      // Cursor Telemetry Label Box (X: ... Y: ...)
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = telemetryColor;
      const text = `X:${Math.round(cx)} Y:${Math.round(cy)}`;
      ctx.fillText(text, cx + 22, cy - 12);

      // Small 1px line connecting reticle to label
      ctx.strokeStyle = activeLineColor;
      ctx.beginPath();
      ctx.moveTo(cx + 14, cy - 10);
      ctx.lineTo(cx + 20, cy - 12);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40 opacity-90 transition-opacity duration-300"
    />
  );
}
