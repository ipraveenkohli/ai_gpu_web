import { useEffect, useRef } from 'react';

const GPU3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let rotation = 0;
    let particles: Array<{ x: number; y: number; z: number; size: number }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        z: (Math.random() - 0.5) * 400,
        size: Math.random() * 2 + 1
      });
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      rotation += 0.005;

      // Draw particles
      ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
      particles.forEach(particle => {
        const rotatedX = particle.x * Math.cos(rotation) - particle.z * Math.sin(rotation);
        const rotatedZ = particle.x * Math.sin(rotation) + particle.z * Math.cos(rotation);
        
        const scale = 300 / (300 + rotatedZ);
        const x = centerX + rotatedX * scale;
        const y = centerY + particle.y * scale;
        const size = particle.size * scale;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw GPU chip
      const chipSize = 150;
      const chipRotation = Math.sin(rotation * 2) * 0.1;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.rotate(chipRotation);

      // Main chip body
      const gradient = ctx.createLinearGradient(-chipSize/2, -chipSize/2, chipSize/2, chipSize/2);
      gradient.addColorStop(0, '#00d4ff');
      gradient.addColorStop(0.5, '#0ea5e9');
      gradient.addColorStop(1, '#0369a1');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(-chipSize/2, -chipSize/2, chipSize, chipSize);

      // Circuit lines
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = Math.cos(angle) * 40;
        const y1 = Math.sin(angle) * 40;
        const x2 = Math.cos(angle) * 70;
        const y2 = Math.sin(angle) * 70;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Corner pins
      ctx.fillStyle = '#fbbf24';
      const pinPositions = [
        [-chipSize/2 + 10, -chipSize/2 + 10],
        [chipSize/2 - 10, -chipSize/2 + 10],
        [-chipSize/2 + 10, chipSize/2 - 10],
        [chipSize/2 - 10, chipSize/2 - 10]
      ];
      
      pinPositions.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Heat sink fins
      ctx.fillStyle = '#64748b';
      for (let i = -2; i <= 2; i++) {
        const x = i * 20;
        ctx.fillRect(x - 5, -chipSize/2 - 20, 10, 15);
      }

      // Glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#00d4ff';
      ctx.strokeStyle = '#00d4ff';
      ctx.lineWidth = 3;
      ctx.strokeRect(-chipSize/2, -chipSize/2, chipSize, chipSize);

      ctx.restore();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
    </div>
  );
};

export default GPU3D;