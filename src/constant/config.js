export const ENV = 'DEV';
export const DEBUG = (ENV !== 'PRODUCTION');
export const API_BASE_URL = 'user-authentication-api-ocokqryugz.now.sh';
export const API_URL = `https://${API_BASE_URL}/api`;

export default { ENV, DEBUG, API_URL };
