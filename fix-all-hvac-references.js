const fs = require('fs');
const path = require('path');

// Define the cities
const cities = [
  'boise', 'caldwell', 'eagle', 'garden-city', 
  'kuna', 'meridian', 'middleton', 'nampa', 'star'
];

// Define the correct roof repair services
const roofServices = [
  'damaged-shingles',
  'emergency-leak-repair',
  'gutter-cleaning',
  'gutter-replacement',
  'hail-damage-repair',
  'missing-shingles',
  'storm-damage',
  'wind-damage-repair'
];

// Service name mapping for proper display names
const serviceDisplayNames = {
  'damaged-shingles': 'Damaged Shingles',
  'emergency-leak-repair': 'Emergency Leak Repair',
  'gutter-cleaning': 'Gutter Cleaning',
  'gutter-replacement': 'Gutter Replacement',
  'hail-damage-repair': 'Hail Damage Repair',
  'missing-shingles': 'Missing Shingles',
  'storm-damage': 'Storm Damage',
  'wind-damage-repair': 'Wind Damage Repair'
};

let filesFixed = 0;
let totalReplacements = 0;

cities.forEach(city => {
  const cityDir = path.join(__dirname, 'src', 'app', 'cities-served', city);
  
  if (!fs.existsSync(cityDir)) {
    console.log(`City directory not found: ${city}`);
    return;
  }
  
  roofServices.forEach(service => {
    const serviceDir = path.join(cityDir, service);
    const filePath = path.join(serviceDir, 'page.tsx');
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;
    
    // Fix HVAC-related links in the "Related Services" section
    // Remove AC Repair links
    if (content.includes('href="/cities-served/' + city + '/ac-repair"')) {
      content = content.replace(
        new RegExp('<Link href="/cities-served/' + city + '/ac-repair"[^>]*>.*?</Link>', 'g'),
        ''
      );
      modified = true;
      totalReplacements++;
    }
    
    // Fix hvac-maintenance links - change to proper roof service
    if (content.includes('href="/cities-served/' + city + '/hvac-maintenance"')) {
      content = content.replace(
        new RegExp('href="/cities-served/' + city + '/hvac-maintenance"', 'g'),
        'href="/cities-served/' + city + '/leak-repair"'
      );
      content = content.replace(
        /HVAC Maintenance|Roofing Maintenance(?=<\/Link>)/g,
        'Leak Repair'
      );
      modified = true;
      totalReplacements++;
    }
    
    // Fix "shingle repair system" to "roofing system"
    content = content.replace(/shingle repair system/gi, 'roofing system');
    content = content.replace(/shingle repair/gi, 'roof repair');
    
    // Fix any other HVAC references
    content = content.replace(/HVAC/g, 'roofing');
    content = content.replace(/hvac/g, 'roof');
    content = content.replace(/air conditioning/gi, 'roof repair');
    content = content.replace(/AC repair/gi, 'roof repair');
    content = content.replace(/furnace/gi, 'roof');
    content = content.replace(/heating and cooling/gi, 'roofing');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      filesFixed++;
      console.log(`Fixed: ${city}/${service}`);
    }
  });
});

console.log(`\n✅ Fixed ${filesFixed} files with ${totalReplacements} HVAC references`);
