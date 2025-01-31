// Este hash corresponde a la contraseña "figma2024co"
export const PASSWORD_HASH = 'a22bebd4d7df948632aa5347e9cd674ee71d363f92f7462c428ec7c42d98515d';

// Función para verificar la contraseña
export const verifyPassword = async (input) => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return hashHex === PASSWORD_HASH;
  } catch (error) {
    return false;
  }
};

// Función para manejar la sesión
export const handleSession = {
  create: () => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('sessionTimestamp', Date.now().toString());
  },
  verify: () => {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    const timestamp = parseInt(localStorage.getItem('sessionTimestamp') || '0');
    const now = Date.now();
    const fourHours = 4 * 60 * 60 * 1000;
    return isAuth && (now - timestamp < fourHours);
  },
  destroy: () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('sessionTimestamp');
  }
}; 