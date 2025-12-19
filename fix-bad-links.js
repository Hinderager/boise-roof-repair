const fs = require('fs');
const path = require('path');

const cities = [
  'boise', 'caldwell', 'eagle', 'garden-city', 
  'kuna', 'meridian', 'middleton', 'nampa', 'star'
];

const services = [
  'damaged-shingles',
  'emergency-leak-repair',
  'gutter-cleaning',
  'gutter-replacement',
  'hail-damage-repair',
  'missing-shingles',
  'storm-damage',
  'wind-damage-repair'
];

let filesFixed = 0;

cities.forEach(city => {
  services.forEach(service => {
    const filePath = path.join(__dirname, 'src', 'app', 'cities-served', city, service, 'page.tsx');
    
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix the bad link
    content = content.replace(
      /href="\/cities-served\/([^"]+)\/roof shingle-repair"/g,
      'href="/cities-served/$1/damaged-shingles"'
    );
    
    content = content.replace(
      />Roof roof repair</g,
      '>Damaged Shingles Repair<'
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      filesFixed++;
      console.log('Fixed: ' + city + '/' + service);
    }
  });
});

console.log('\nFixed ' + filesFixed + ' files');
