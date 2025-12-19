const fs = require('fs');
const path = require('path');

// Fix resources page
const resourcesPath = path.join(__dirname, 'src', 'app', 'resources', 'page.tsx');
if (fs.existsSync(resourcesPath)) {
  let content = fs.readFileSync(resourcesPath, 'utf8');
  
  // Fix metadata description
  content = content.replace(
    /Learn about heating and cooling for your home/,
    'Learn about roof repair and maintenance for your home'
  );
  
  // Fix slug from hvac-tips to roofing-tips
  content = content.replace(
    /slug: 'hvac-tips'/,
    "slug: 'roofing-tips'"
  );
  
  fs.writeFileSync(resourcesPath, content);
  console.log('✅ Fixed resources page');
}

// Fix terms page
const termsPath = path.join(__dirname, 'src', 'app', 'terms', 'page.tsx');
if (fs.existsSync(termsPath)) {
  let content = fs.readFileSync(termsPath, 'utf8');
  
  // Replace any HVAC references
  content = content.replace(/HVAC/g, 'roofing');
  content = content.replace(/hvac/g, 'roofing');
  content = content.replace(/heating and cooling/gi, 'roofing');
  content = content.replace(/heat pump/gi, 'roofing');
  
  fs.writeFileSync(termsPath, content);
  console.log('✅ Fixed terms page');
}

console.log('\n✅ All non-city pages fixed');
