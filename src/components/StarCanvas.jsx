import { useEffect, useRef } from 'react';

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate stars with varying depths
    const stars = Array.from({ length: 600 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
    }));

    // Generate shooting stars
    const shootingStars = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height / 2),
      length: Math.random() * 80 + 40,
      speed: Math.random() * 6 + 4,
      angle: Math.PI / 4,
      opacity: 0,
      delay: Math.random() * 300,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space background gradient
      const bgGradient = ctx.createRadialGradient(
        width / 2, height / 2, 50,
        width / 2, height / 2, Math.max(width, height)
      );
      bgGradient.addColorStop(0, '#07051a');
      bgGradient.addColorStop(0.5, '#03010f');
      bgGradient.addColorStop(1, '#000005');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and animate standard stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 232, 255, ${Math.abs(star.alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00D4FF';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });

      // Draw and animate shooting stars
      shootingStars.forEach((s) => {
        if (s.delay > 0) {
          s.delay--;
          return;
        }

        ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - s.length * Math.cos(s.angle),
          s.y - s.length * Math.sin(s.angle)
        );
        ctx.stroke();

        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);

        // Reset when it goes off screen
        if (s.x > width || s.y > height) {
          s.x = Math.random() * width;
          s.y = 0;
          s.delay = Math.random() * 400 + 100;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}