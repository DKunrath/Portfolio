// Script para gerar imagem de compartilhamento
// Execute este arquivo com Node.js para gerar a imagem

const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function generateOGImage() {
  // Criar canvas 1200x630 (tamanho padrão Open Graph)
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradiente
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#030014');
  gradient.addColorStop(0.5, '#1e1b4b');
  gradient.addColorStop(1, '#6366f1');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Círculos decorativos
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#6366f1';
  ctx.beginPath();
  ctx.arc(100, 100, 60, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 0.2;
  ctx.fillStyle = '#8b5cf6';
  ctx.beginPath();
  ctx.arc(1100, 530, 80, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 0.4;
  ctx.fillStyle = '#06b6d4';
  ctx.beginPath();
  ctx.arc(200, 500, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1;

  // Texto principal
  ctx.font = 'bold 72px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('Rodrigo Kunrath', width / 2, 200);

  ctx.font = '36px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Desenvolvedor Full Stack', width / 2, 270);

  ctx.font = '24px Arial';
  ctx.fillStyle = '#06b6d4';
  ctx.fillText('React • Next.js • Node.js • TypeScript', width / 2, 350);

  // Logo RK
  const logoRadius = 50;
  const logoX = width / 2;
  const logoY = 450;

  // Círculo do logo
  const logoGradient = ctx.createLinearGradient(logoX - logoRadius, logoY - logoRadius, logoX + logoRadius, logoY + logoRadius);
  logoGradient.addColorStop(0, '#8b5cf6');
  logoGradient.addColorStop(1, '#06b6d4');
  
  ctx.fillStyle = logoGradient;
  ctx.beginPath();
  ctx.arc(logoX, logoY, logoRadius, 0, Math.PI * 2);
  ctx.fill();

  // Borda do logo
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Texto RK
  ctx.font = 'bold 36px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('RK', logoX, logoY + 12);

  // Texto inferior
  ctx.font = '18px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillText('Portfolio & Projetos', width / 2, 550);

  // Salvar imagem
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/og-image.png', buffer);
  console.log('Imagem og-image.png gerada com sucesso!');
}

// Para usar, instale: npm install canvas
// Depois execute: node generate-og-image.js
generateOGImage().catch(console.error);
