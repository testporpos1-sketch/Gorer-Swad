const fs = require('fs');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_KEY || '';

if (!url || !key) {
  console.error('❌ SUPABASE_URL এবং SUPABASE_KEY environment variable সেট করুন!');
  process.exit(1);
}

let html = fs.readFileSync('src/index.html', 'utf8');
html = html.replace('__SUPABASE_URL__', url);
html = html.replace('__SUPABASE_KEY__', key);

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/index.html', html);
console.log('✅ Build সফল হয়েছে!');
