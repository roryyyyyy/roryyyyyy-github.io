const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const carsDir = path.join(__dirname, '../cars');
const outputPath = path.join(carsDir, 'index.json');

const cars = [];

fs.readdirSync(carsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(carsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    if (data.title && data.price && data.image) {
      cars.push({
        title: data.title,
        price: data.price,
        image: data.image,
        slug: data.slug || file.replace('.md', '')
      });
    }
  }
});

fs.writeFileSync(outputPath, JSON.stringify(cars, null, 2));
