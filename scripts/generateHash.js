const crypto = require('crypto');

// Reemplaza 'tu_contraseña' con la contraseña que quieras usar
const password = 'figma2024co';

const hash = crypto
  .createHash('sha256')
  .update(password)
  .digest('hex');

console.log('Tu hash es:', hash); 