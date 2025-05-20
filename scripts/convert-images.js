// scripts/convert-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/assets/desktop/cards/";
const outputDir = "public/images/optimized/cards/";
const sizes = [480, 768, 1200];
const formats = [
  { fmt: "avif", opts: { quality: 50 } },
  { fmt: "webp", opts: { quality: 80 } },
];

// ensure output folder exists
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (let file of files) {
    const name = path.parse(file).name;
    const src = path.join(inputDir, file);
    const destDir = path.join(outputDir, name);

    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);

    for (let w of sizes) {
      for (let { fmt, opts } of formats) {
        const outName = `${w}.${fmt}`;
        await sharp(src)
          .resize(w)
          .toFormat(fmt, opts)
          .toFile(path.join(destDir, outName));
      }
    }
    // Copy original as the final fallback
    fs.copyFileSync(src, path.join(destDir, `${file}`));
    console.log(`✅ Processed ${name}`);
  }
  console.log("🎉 All images optimized and grouped!");
})();
