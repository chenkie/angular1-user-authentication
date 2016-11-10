import angular from 'angular';

import AuthappHome from './component/authapp-home/authapp-home.component';
import AuthappLogin from './component/authapp-login/authapp-login.component';

const moduleName = 'app.components';

angular
  .module(moduleName, [])
  .component('authappHome', AuthappHome)
  .component('authappLogin', AuthappLogin);

export default moduleName;
