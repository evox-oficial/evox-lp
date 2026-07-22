const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');

const targets = [
    { file: path.join(ROOT, 'css', 'style.css'), loader: 'css' },
    ...fs.readdirSync(path.join(ROOT, 'js'))
        .filter((name) => name.endsWith('.js'))
        .map((name) => ({ file: path.join(ROOT, 'js', name), loader: 'js' }))
];

let totalBefore = 0;
let totalAfter = 0;

for (const { file, loader } of targets) {
    const original = fs.readFileSync(file, 'utf8');

    try {
        const result = esbuild.transformSync(original, { loader, minify: true });
        fs.writeFileSync(file, result.code);

        totalBefore += Buffer.byteLength(original);
        totalAfter += Buffer.byteLength(result.code);

        console.log(`minified ${path.relative(ROOT, file)}: ${original.length} -> ${result.code.length} bytes`);
    } catch (error) {
        console.warn(`skipped ${path.relative(ROOT, file)} (kept original): ${error.message}`);
    }
}

console.log(`\nTotal: ${totalBefore} -> ${totalAfter} bytes (${(totalBefore - totalAfter)} bytes saved)`);
