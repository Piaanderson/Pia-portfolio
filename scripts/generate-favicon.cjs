/**
 * Generates a square favicon (32x32) from the header logo with padding so the
 * logo is not squished — open space on top/bottom or sides as needed.
 * Run: node scripts/generate-favicon.cjs
 */
const fs = require("fs");
const path = require("path");

async function main() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error("Run: npm install --save-dev sharp");
    process.exit(1);
  }

  const root = path.join(__dirname, "..");
  const logoPath = path.join(root, "public", "images", "pia-logo.png");
  const outPath = path.join(root, "app", "icon.png");

  if (!fs.existsSync(logoPath)) {
    console.error("Logo not found:", logoPath);
    process.exit(1);
  }

  const size = 32;
  const logo = sharp(logoPath);
  const meta = await logo.metadata();
  const w = meta.width || 1;
  const h = meta.height || 1;
  const scale = Math.min(size / w, size / h, 1);
  const scaledW = Math.round(w * scale);
  const scaledH = Math.round(h * scale);
  const left = Math.round((size - scaledW) / 2);
  const top = Math.round((size - scaledH) / 2);

  const resized = await logo.resize(scaledW, scaledH).toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, left, top }])
    .png()
    .toFile(outPath);

  console.log("Generated", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
