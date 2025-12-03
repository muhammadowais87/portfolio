import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Make sure canvas covers the entire viewport
    const handleResize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      connections: number[];

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5 + 1.2;
        this.speedX = (Math.random() - 1.2) * 1.2;
        this.speedY = (Math.random() - 1.2) * 1.2;
        this.connections = [];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#BE73FF';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, this.size * 0.2, this.x, this.y, this.size * 1.5);
        gradient.addColorStop(0, 'rgba(190, 115, 255, 0.6)');
        gradient.addColorStop(0.6, 'rgba(190, 115, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(190, 115, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(190, 115, 255, ${0.4 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10"
      style={{
        position: 'fixed',
        background: 'radial-gradient(circle at center, rgba(190, 115, 255, 0.15) 0%, rgba(0, 0, 0, 1) 70%)',
        minHeight: '100vh',
        minWidth: '100vw'
      }}
    />
  );
};

export default ParticlesBackground;
