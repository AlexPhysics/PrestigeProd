const fs = require('fs');

const languages = ['en', 'de', 'fr', 'it'];

console.log('🔍 Validating translation files...\n');

languages.forEach(lang => {
  try {
    const content = fs.readFileSync(`public/locales/${lang}/translation.json`, 'utf8');
    JSON.parse(content);
    console.log(`${lang.toUpperCase()}: ✅ Valid JSON`);
  } catch (error) {
    console.log(`${lang.toUpperCase()}: ❌ Invalid JSON`);
    console.log(`   Error: ${error.message}\n`);
  }
});

console.log('\n✨ Validation complete!');
