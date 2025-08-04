const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'products-category-images');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s_]+/g, '-') // spaces and underscores to dash
    .replace(/[()]+/g, '') // remove parentheses
    .replace(/[^a-z0-9\-\.]/g, '') // remove all except a-z, 0-9, dash, dot
    .replace(/-+/g, '-') // collapse multiple dashes
    .replace(/^-+|-+$/g, ''); // trim dashes
}

fs.readdirSync(dir).forEach(file => {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const slug = slugify(base) + ext.toLowerCase();
  if (file !== slug) {
    fs.renameSync(path.join(dir, file), path.join(dir, slug));
    console.log(`Renamed: ${file} -> ${slug}`);
  }
}); 