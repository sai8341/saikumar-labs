import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clean, permanent, canonical URL that will work forever
const TARGET_URL = "https://saikumarlabs.com/card";
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const DOWNLOADS_DIR = "C:\\Users\\saikumar\\Downloads";

async function generateQRCodes() {
  console.log("Generating finalized permanent printable QR codes for:", TARGET_URL);

  // 1. High-Precision Vector SVG (Pure Black on White, Level H error correction)
  const svgString = await QRCode.toString(TARGET_URL, {
    type: "svg",
    errorCorrectionLevel: "H", // 30% fault tolerance
    margin: 3,
    color: {
      dark: "#09090B",
      light: "#FFFFFF",
    },
  });

  const publicSvgPath = path.join(PUBLIC_DIR, "saikumar-labs-card-qr.svg");
  fs.writeFileSync(publicSvgPath, svgString, "utf8");
  console.log("Vector SVG saved in website/public:", publicSvgPath);

  // 2. High-Resolution 300+ DPI PNG (1500x1500px for crystal-clear physical print)
  const publicPngPath = path.join(PUBLIC_DIR, "saikumar-labs-card-qr.png");
  await QRCode.toFile(publicPngPath, TARGET_URL, {
    type: "png",
    errorCorrectionLevel: "H",
    margin: 3,
    width: 1500, // 1500px resolution
    color: {
      dark: "#09090B",
      light: "#FFFFFF",
    },
  });
  console.log("High-Res PNG (1500x1500px) saved in website/public:", publicPngPath);

  // 3. Save finalized copies directly to user's Downloads folder
  if (fs.existsSync(DOWNLOADS_DIR)) {
    const downloadsPngPath = path.join(DOWNLOADS_DIR, "SaiKumar-Labs-Visiting-Card-QR.png");
    const downloadsSvgPath = path.join(DOWNLOADS_DIR, "SaiKumar-Labs-Visiting-Card-QR.svg");

    fs.copyFileSync(publicPngPath, downloadsPngPath);
    fs.copyFileSync(publicSvgPath, downloadsSvgPath);

    console.log("Successfully saved to Downloads folder:");
    console.log(" ->", downloadsPngPath);
    console.log(" ->", downloadsSvgPath);
  }

  console.log("Permanent Visiting Card QR Code generation completed successfully!");
}

generateQRCodes().catch((err) => {
  console.error("Error generating QR codes:", err);
  process.exit(1);
});
