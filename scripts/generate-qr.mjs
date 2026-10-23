import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = "https://saikumarlabs.com/card?utm_source=visiting_card&utm_medium=print&utm_campaign=founder_card";
const PUBLIC_DIR = path.join(__dirname, "..", "public");

async function generateQRCodes() {
  console.log("Generating high-resolution printable QR codes for:", TARGET_URL);

  // 1. High-Precision Vector SVG (Perfect for vector printing / Adobe Illustrator / CorelDraw)
  const svgString = await QRCode.toString(TARGET_URL, {
    type: "svg",
    errorCorrectionLevel: "H", // 30% error tolerance (highest available)
    margin: 3,
    color: {
      dark: "#09090B", // High-contrast deep black/charcoal
      light: "#FFFFFF", // Pure white background for 100% scan reliability
    },
  });

  const svgPath = path.join(PUBLIC_DIR, "saikumar-labs-card-qr.svg");
  fs.writeFileSync(svgPath, svgString, "utf8");
  console.log("Vector SVG generated successfully at:", svgPath);

  // 2. High-Resolution 300+ DPI PNG (1200x1200px - razor sharp for physical printing)
  const pngPath = path.join(PUBLIC_DIR, "saikumar-labs-card-qr.png");
  await QRCode.toFile(pngPath, TARGET_URL, {
    type: "png",
    errorCorrectionLevel: "H",
    margin: 3,
    width: 1200, // 1200px width ensures ultra-sharp 300+ DPI at 2-3 inches
    color: {
      dark: "#09090B",
      light: "#FFFFFF",
    },
  });
  console.log("High-Res PNG (1200x1200px) generated successfully at:", pngPath);

  // 3. Brand Blue Accent Variant (Optional for branded layouts)
  const blueSvgPath = path.join(PUBLIC_DIR, "saikumar-labs-card-qr-blue.svg");
  const blueSvgString = await QRCode.toString(TARGET_URL, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 3,
    color: {
      dark: "#0067F4", // Brand corporate blue
      light: "#FFFFFF",
    },
  });
  fs.writeFileSync(blueSvgPath, blueSvgString, "utf8");
  console.log("Brand Blue SVG generated successfully at:", blueSvgPath);

  console.log("All QR code assets ready for production printing!");
}

generateQRCodes().catch((err) => {
  console.error("Error generating QR codes:", err);
  process.exit(1);
});
