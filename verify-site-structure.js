const fs = require('fs');
const path = require('path');

const cities = [
  'boise', 'caldwell', 'eagle', 'garden-city', 
  'kuna', 'meridian', 'middleton', 'nampa', 'star'
];

const correctServices = [
  'damaged-shingles',
  'emergency-leak-repair',
  'gutter-cleaning',
  'gutter-replacement',
  'hail-damage-repair',
  'missing-shingles',
  'storm-damage',
  'wind-damage-repair'
];

console.log('=== Verifying Site Structure ===\n');

let allGood = true;

cities.forEach(city => {
  const cityDir = path.join(__dirname, 'src', 'app', 'cities-served', city);
  
  if (!fs.existsSync(cityDir)) {
    console.log('Missing city: ' + city);
    allGood = false;
    return;
  }
  
  const services = fs.readdirSync(cityDir).filter(item => {
    const itemPath = path.join(cityDir, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  // Check for any incorrect services
  const hvacServices = ['ac-repair', 'furnace-repair', 'heat-pump-repair', 'hvac-maintenance', 'heater-repair'];
  const foundHvac = services.filter(s => hvacServices.includes(s));
  
  if (foundHvac.length > 0) {
    console.log('HVAC found in ' + city + ': ' + foundHvac);
    allGood = false;
  }
  
  // Check all correct services exist
  const missingServices = correctServices.filter(s => !services.includes(s));
  const extraServices = services.filter(s => !correctServices.includes(s));
  
  if (missingServices.length === 0 && extraServices.length === 0) {
    console.log('OK ' + city + ': All ' + services.length + ' services correct');
  }
});

if (allGood) {
  console.log('\nSite structure is clean - no HVAC services found!');
} else {
  console.log('\nIssues found that need attention');
}
