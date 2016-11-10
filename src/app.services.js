import angular from 'angular';

import ConfigService from './service/config.service';
import AuthService from './service/auth.service';

const moduleName = 'app.services';

angular
  .module(moduleName, [])
  .factory('configService', ConfigService.factory)
  .factory('authService', AuthService.factory);

export default moduleName;
