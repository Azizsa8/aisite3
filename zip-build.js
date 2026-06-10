import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';

const distPath = path.resolve('./dist');
const zipPath = path.resolve('./infinityfree-deployment.zip');

if (!fs.existsSync(distPath)) {
  console.error("Error: 'dist' directory not found! Run the production build first.");
  process.exit(1);
}

console.log("Preparing custom static production package for InfinityFree...");

// Initialize adm-zip
const zip = new AdmZip();

// addLocalFolder(distPath) adds all files and subdirectories directly 
// at the root of the zip archive (no nested parent dist/ folder)
zip.addLocalFolder(distPath);

console.log("Generating 'infinityfree-deployment.zip' in root...");
zip.writeZip(zipPath);

console.log("\n========================================================");
console.log("🎉 SUCCESS: INFINITYFREE ZIP DEPLOYMENT PACKAGE COMPLETED!");
console.log(`Package Location: ${zipPath}`);
console.log("Instructions:");
console.log("1. Download 'infinityfree-deployment.zip' from the workspace file tree.");
console.log("2. Extract the ZIP locally on your computer.");
console.log("3. Upload the *contents* of the extracted folder directly into your");
console.log("   InfinityFree 'htdocs/' directory via FTP or client control panel.");
console.log("========================================================\n");
