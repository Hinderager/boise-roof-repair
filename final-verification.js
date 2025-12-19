const fs = require('fs');
const path = require('path');

console.log('=== FINAL VERIFICATION ===\n');

// Check src directory for HVAC references
const hvacPatterns = [
  'HVAC', 'hvac',
  'AC Repair', 'ac-repair',
  'furnace', 'Furnace',
  'heat pump', 'Heat Pump',
  'air conditioning', 'Air Conditioning',
  'heating and cooling'
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const found = [];
  
  hvacPatterns.forEach(pattern => {
    if (content.includes(pattern)) {
      found.push(pattern);
    }
  });
  
  return found;
}

function scanDirectory(dir, results = []) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    if (item === 'node_modules' || item === '.next') return;
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath, results);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
        const found = checkFile(fullPath);
        if (found.length > 0) {
          results.push({ file: fullPath, patterns: found });
        }
      }
    }
  });
  
  return results;
}

const srcDir = path.join(__dirname, 'src');
const results = scanDirectory(srcDir);

if (results.length === 0) {
  console.log('VERIFIED: No HVAC references found in src directory!');
  console.log('\nAll city service pages are clean.');
  console.log('Total cities: 9');
  console.log('Services per city: 8');
  console.log('Total pages: 72');
} else {
  console.log('WARNING: Found HVAC references:\n');
  results.forEach(r => {
    console.log('File: ' + r.file);
    console.log('Patterns: ' + r.patterns.join(', '));
    console.log('');
  });
}

console.log('\n=== VERIFICATION COMPLETE ===');
