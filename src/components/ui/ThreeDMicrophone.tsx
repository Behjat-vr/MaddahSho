'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ThreeDMicrophoneProps {
  size?: number;
}

export default function ThreeDMicrophone({ size = 320 }: ThreeDMicrophoneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt / interaction state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);

  // Track target and current tilt angles for smooth interpolation
  const tiltRef = useRef({ rotX: 0, rotY: 0, targetX: 0, targetY: 0, pulse: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle high DPI displays
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const canvasWidth = size * dpr;
    const canvasHeight = size * dpr;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Particles system around the microphone
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * size * 0.8,
      y: (Math.random() - 0.5) * size * 0.8,
      z: Math.random() * size * 0.5,
      size: Math.random() * 2.5 + 1,
      speedY: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.save();
      ctx.scale(dpr, dpr);

      const centerX = size / 2;
      const centerY = size / 2;

      // Smooth interpolation for mouse interaction
      const t = tiltRef.current;
      t.rotX += (t.targetX - t.rotX) * 0.08;
      t.rotY += (t.targetY - t.rotY) * 0.08;

      // Idle floating / bobbing movement
      const floatY = Math.sin(time * 1.5) * 8;
      const idleRotZ = Math.sin(time * 0.8) * 0.04;

      const micX = centerX + t.rotY * 25;
      const micY = centerY + floatY + t.rotX * 25;

      // ------------------------------------------------------------------
      // 1. Draw Outer Ambient Glow & Aura Rings
      // ------------------------------------------------------------------
      const glowGrad = ctx.createRadialGradient(micX, micY - 20, 10, micX, micY - 20, size * 0.45);
      glowGrad.addColorStop(0, 'rgba(212, 168, 83, 0.25)');
      glowGrad.addColorStop(0.5, 'rgba(122, 32, 64, 0.12)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(micX, micY - 20, size * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // ------------------------------------------------------------------
      // 2. Draw 3D Sound Wave Equalizer Rings (Expanding Wavefronts)
      // ------------------------------------------------------------------
      for (let i = 0; i < 3; i++) {
        const ringTime = (time * 1.2 + i * 1.1) % 3.3;
        const ringRadius = 45 + ringTime * 35;
        const ringOpacity = Math.max(0, 1 - ringTime / 3.3) * 0.5;

        ctx.save();
        ctx.translate(micX, micY - 45);
        ctx.scale(1, 0.35); // Perspective tilt for 3D ring

        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 195, 115, ${ringOpacity})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#d4a853';
        ctx.shadowBlur = 12;
        ctx.stroke();

        ctx.restore();
      }

      // ------------------------------------------------------------------
      // 3. Draw Floating Energy Particles
      // ------------------------------------------------------------------
      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < -size * 0.4) {
          p.y = size * 0.4;
          p.x = (Math.random() - 0.5) * size * 0.7;
        }

        const px = micX + p.x + Math.sin(time + p.phase) * 6;
        const py = micY + p.y;
        const alpha = Math.sin(time * 2 + p.phase) * 0.3 + p.opacity * 0.7;

        ctx.fillStyle = `rgba(232, 195, 115, ${Math.max(0.1, alpha)})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // ------------------------------------------------------------------
      // 4. Draw Microphone 3D Assembly (Rendered from back to front)
      // ------------------------------------------------------------------
      ctx.save();
      ctx.translate(micX, micY);
      ctx.rotate(idleRotZ + t.rotY * 0.15);

      // --- A. Studio Stand Base & Rod (3D Perspective) ---
      // Stand Rod Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(-4, 75, 8, 45);

      // Metallic Stand Pole
      const rodGrad = ctx.createLinearGradient(-8, 0, 8, 0);
      rodGrad.addColorStop(0, '#151522');
      rodGrad.addColorStop(0.4, '#4a4a60');
      rodGrad.addColorStop(0.7, '#8888a5');
      rodGrad.addColorStop(1, '#151522');

      ctx.fillStyle = rodGrad;
      ctx.fillRect(-6, 65, 12, 50);

      // Metallic Stand Joint Ring
      const jointGrad = ctx.createLinearGradient(-12, 0, 12, 0);
      jointGrad.addColorStop(0, '#7a5418');
      jointGrad.addColorStop(0.5, '#e8c373');
      jointGrad.addColorStop(1, '#7a5418');

      ctx.fillStyle = jointGrad;
      ctx.beginPath();
      ctx.roundRect(-10, 60, 20, 10, 3);
      ctx.fill();

      // --- B. Shock Mount Ring (Spider Mount) ---
      ctx.save();
      ctx.scale(1, 0.4);

      // Outer Shock Mount Ring
      ctx.beginPath();
      ctx.arc(0, 75, 42, 0, Math.PI * 2);
      ctx.strokeStyle = '#d4a853';
      ctx.lineWidth = 5;
      ctx.shadowColor = '#d4a853';
      ctx.shadowBlur = 10;
      ctx.stroke();

      // Inner Mount Ring
      ctx.beginPath();
      ctx.arc(0, 75, 28, 0, Math.PI * 2);
      ctx.strokeStyle = '#4a4a60';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.restore();

      // --- C. Metallic Shock Mount Connectors (Elastic bands) ---
      ctx.strokeStyle = 'rgba(212, 168, 83, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-35, 30);
      ctx.lineTo(-20, 20);
      ctx.moveTo(35, 30);
      ctx.lineTo(20, 20);
      ctx.stroke();

      // --- D. Main Microphone Body (Brushed Dark Alloy + Metallic Gold Accents) ---
      const bodyWidth = 38;
      const bodyHeight = 70;
      const bodyY = -15;

      // Body Gradient
      const bodyGrad = ctx.createLinearGradient(-bodyWidth / 2, 0, bodyWidth / 2, 0);
      bodyGrad.addColorStop(0, '#0c0c16');
      bodyGrad.addColorStop(0.25, '#1e1e32');
      bodyGrad.addColorStop(0.55, '#3a3a55');
      bodyGrad.addColorStop(0.8, '#181828');
      bodyGrad.addColorStop(1, '#080810');

      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.roundRect(-bodyWidth / 2, bodyY, bodyWidth, bodyHeight, [4, 4, 16, 16]);
      ctx.fill();

      // Gold Accent Band around Mic Neck
      const neckGrad = ctx.createLinearGradient(-bodyWidth / 2, 0, bodyWidth / 2, 0);
      neckGrad.addColorStop(0, '#805a1e');
      neckGrad.addColorStop(0.3, '#f5d78e');
      neckGrad.addColorStop(0.7, '#d4a853');
      neckGrad.addColorStop(1, '#604212');

      ctx.fillStyle = neckGrad;
      ctx.fillRect(-bodyWidth / 2, bodyY - 4, bodyWidth, 6);

      // Gold Engraved Brand Badge "مداح شو"
      ctx.fillStyle = 'rgba(212, 168, 83, 0.15)';
      ctx.fillRect(-14, bodyY + 18, 28, 24);
      ctx.strokeStyle = '#d4a853';
      ctx.lineWidth = 1;
      ctx.strokeRect(-14, bodyY + 18, 28, 24);

      // Brand Logo Text inside Badge
      ctx.fillStyle = '#e8c373';
      ctx.font = 'bold 9px Vazirmatn, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('مداح شو', 0, bodyY + 30);

      // LED Indicator Light on Body (Pulsing Amber)
      const ledPulse = (Math.sin(time * 4) + 1) / 2;
      ctx.fillStyle = `rgba(232, 168, 73, ${0.4 + ledPulse * 0.6})`;
      ctx.beginPath();
      ctx.arc(0, bodyY + 50, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = '#e8a849';
      ctx.shadowBlur = 8 * ledPulse;

      // --- E. 3D Studio Mesh Grille (Microphone Head) ---
      const headWidth = 44;
      const headHeight = 54;
      const headY = bodyY - headHeight - 2;

      // Interior Acoustic Pop Filter (Glow inside Mesh)
      const filterGrad = ctx.createRadialGradient(0, headY + headHeight / 2, 4, 0, headY + headHeight / 2, 22);
      filterGrad.addColorStop(0, 'rgba(232, 195, 115, 0.85)');
      filterGrad.addColorStop(0.5, 'rgba(122, 32, 64, 0.7)');
      filterGrad.addColorStop(1, 'rgba(20, 10, 20, 0.9)');

      ctx.fillStyle = filterGrad;
      ctx.beginPath();
      ctx.roundRect(-headWidth / 2 + 2, headY + 2, headWidth - 4, headHeight - 4, [22, 22, 6, 6]);
      ctx.fill();

      // Outer Mesh Dome Shape
      const headGrad = ctx.createLinearGradient(-headWidth / 2, 0, headWidth / 2, 0);
      headGrad.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      headGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.35)');
      headGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.15)');
      headGrad.addColorStop(1, 'rgba(0, 0, 0, 0.4)');

      ctx.strokeStyle = 'rgba(212, 168, 83, 0.4)';
      ctx.lineWidth = 1.5;

      // Draw Grid Mesh Lines (Horizontal & Vertical Woven Mesh)
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(-headWidth / 2, headY, headWidth, headHeight, [22, 22, 6, 6]);
      ctx.clip();

      // Horizontal Mesh Wires
      for (let y = headY + 6; y < headY + headHeight; y += 5) {
        ctx.beginPath();
        ctx.moveTo(-headWidth / 2, y);
        ctx.lineTo(headWidth / 2, y);
        ctx.strokeStyle = y % 10 === 0 ? 'rgba(232, 195, 115, 0.6)' : 'rgba(180, 180, 210, 0.3)';
        ctx.stroke();
      }

      // Vertical Mesh Wires
      for (let x = -headWidth / 2 + 4; x < headWidth / 2; x += 5) {
        ctx.beginPath();
        ctx.moveTo(x, headY);
        ctx.lineTo(x, headY + headHeight);
        ctx.strokeStyle = 'rgba(232, 195, 115, 0.35)';
        ctx.stroke();
      }
      ctx.restore();

      // Chrome/Gold Outer Rib Ribbons (3D Metal Bands around Grille)
      // Top Dome Rim
      ctx.strokeStyle = neckGrad;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(-headWidth / 2, headY, headWidth, headHeight, [22, 22, 6, 6]);
      ctx.stroke();

      // Center Gold Band across Grille
      ctx.fillStyle = neckGrad;
      ctx.fillRect(-headWidth / 2 - 1, headY + headHeight / 2 - 2, headWidth + 2, 5);

      // --- F. Specular Metallic Light Reflection Overlay ---
      const sheenGrad = ctx.createLinearGradient(-headWidth, headY, headWidth * 0.8, headY + headHeight * 2);
      sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      sheenGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
      sheenGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = sheenGrad;
      ctx.beginPath();
      ctx.roundRect(-headWidth / 2, headY, headWidth / 2, headHeight, [22, 0, 0, 6]);
      ctx.fill();

      ctx.restore(); // Restore translate

      // ------------------------------------------------------------------
      // 5. Draw Sound Wave Energy Rays & Floating Audio Equalizer Bars
      // ------------------------------------------------------------------
      const eqCount = 14;
      const eqRadius = size * 0.42;
      for (let i = 0; i < eqCount; i++) {
        const angle = (i / eqCount) * Math.PI * 2 + time * 0.5;
        const heightMultiplier = Math.sin(time * 4 + i * 0.8) * 0.5 + 0.5;
        const barHeight = 8 + heightMultiplier * 20;

        const bx1 = micX + Math.cos(angle) * eqRadius;
        const by1 = micY + Math.sin(angle) * (eqRadius * 0.5);
        const bx2 = micX + Math.cos(angle) * (eqRadius + barHeight);
        const by2 = micY + Math.sin(angle) * ((eqRadius + barHeight) * 0.5);

        ctx.beginPath();
        ctx.moveTo(bx1, by1);
        ctx.lineTo(bx2, by2);
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.2 + heightMultiplier * 0.5})`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  // Handle Mouse Movement over Container for Parallax 3D Rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    tiltRef.current.targetX = y * 0.8;
    tiltRef.current.targetY = x * 0.8;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    tiltRef.current.targetX = 0;
    tiltRef.current.targetY = 0;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsSpeaking(!isSpeaking)}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        margin: '0 auto',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      title="میکروفون سه بعدی مداح شو (کلیک برای فعال‌سازی حالت صوتی)"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      {/* Floating 3D Badge Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(18, 18, 35, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(212, 168, 83, 0.4)',
          borderRadius: '9999px',
          padding: '4px 16px',
          fontSize: '0.78rem',
          color: '#e8c373',
          fontWeight: 600,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(212, 168, 83, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: isSpeaking ? '#3ecf8e' : '#e8a849',
            boxShadow: isSpeaking ? '0 0 8px #3ecf8e' : '0 0 8px #e8a849',
          }}
        />
        <span>{isSpeaking ? 'میکروفون هوشمند فعال' : 'آماده دریافت صدا'}</span>
      </div>
    </div>
  );
}
