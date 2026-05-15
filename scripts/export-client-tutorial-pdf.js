const path = require("path");

async function run() {
  const { chromium } = require("playwright");

  const rootDir = process.cwd();
  const htmlPath = path.join(rootDir, "documentos", "tutorial-cliente-evox.html");
  const pdfPath = path.join(rootDir, "documentos", "tutorial-cliente-evox.pdf");
  const fileUrl = `file:///${htmlPath.replace(/\\/g, "/")}`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 2200 },
    deviceScaleFactor: 1
  });

  await page.goto(fileUrl, { waitUntil: "load" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "14mm",
      right: "12mm",
      bottom: "14mm",
      left: "12mm"
    }
  });

  await browser.close();
  console.log(pdfPath);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
