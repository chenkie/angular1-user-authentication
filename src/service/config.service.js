import CONF from '../constant/config';

const CONFIG = new Map();

class ConfigService {
  constructor() {
    Object
      .keys(CONF)
      .map(key => CONFIG.set(key, CONF[key]));
  }

  /**
   * Get config value by key
   * @param {String} key
   * @returns {String}
   */
  get(key) {
    return CONFIG.get(key);
  }

  /**
   * Internal logger (never use in production)
   * @param message
   * @returns {ConfigService}
   */
  logger(...message) {
    if (this.get('DEBUG')) {
      console.log(...message);
    }

    return this;
  }

  /**
   * Exception catcher
   * Use it in Promise (with $http) to catch error globally and dispatch them
   */
  catcher(...errors) {
    console.error('Some exception happen : ', ...errors);
  }

  /**
   * Factory of this class
   * @returns {ConfigService}
   */
  static factory() {
    return new ConfigService();
  }
}

export default ConfigService;
