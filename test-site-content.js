const fs = require('fs');
const path = require('path');

console.log('=== Testing Random Sample Pages ===\n');

const testCases = [
  { city: 'boise', service: 'damaged-shingles' },
  { city: 'meridian', service: 'storm-damage' },
  { city: 'nampa', service: 'gutter-cleaning' },
  { city: 'eagle', service: 'emergency-leak-repair' }
];

let allPassed = true;

testCases.forEach(test => {
  const filePath = path.join(__dirname, 'src', 'app', 'cities-served', test.city, test.service, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log('FAIL: File not found: ' + test.city + '/' + test.service);
    allPassed = false;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check for HVAC references
  const badPatterns = ['HVAC', 'hvac', 'AC Repair', 'ac-repair', 'furnace', 'heating and cooling'];
  const found = badPatterns.filter(p => content.includes(p));
  
  if (found.length > 0) {
    console.log('FAIL: ' + test.city + '/' + test.service + ' contains: ' + found.join(', '));
    allPassed = false;
  } else {
    console.log('PASS: ' + test.city + '/' + test.service);
  }
  
  // Check for proper roofing content
  const goodPatterns = ['roof', 'repair', test.city];
  const hasGood = goodPatterns.some(p => content.toLowerCase().includes(p));
  
  if (!hasGood) {
    console.log('WARN: ' + test.city + '/' + test.service + ' missing expected content');
  }
  
  // Check phone number
  if (!content.includes('(208) 505-9352')) {
    console.log('WARN: ' + test.city + '/' + test.service + ' missing phone number');
  }
});

if (allPassed) {
  console.log('\n=== ALL TESTS PASSED ===');
  console.log('Site is ready for deployment!');
} else {
  console.log('\n=== SOME TESTS FAILED ===');
}
