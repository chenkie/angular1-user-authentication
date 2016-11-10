import angular from 'angular';
import router from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import angularJwt from 'angular-jwt';

import services from './app.services';
import components from './app.components';

import { API_BASE_URL } from './constant/config';

import { default as ROUTES } from './constant/routes';

const moduleName = 'app';

angular
  .module(moduleName, [router, uibootstrap, angularJwt, services, components])
  .config((
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    $httpProvider,
    jwtOptionsProvider
  ) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(ROUTES.default);
    jwtOptionsProvider.config({
      tokenGetter: () => localStorage.getItem('token'),
      whiteListedDomains: [API_BASE_URL],
      unauthenticatedRedirector: ($state) => {
        $state.go('home');
      },
    });

    $httpProvider.interceptors.push('jwtInterceptor');

    Object
      .keys(ROUTES)
      .filter(route => route !== 'default')
      .forEach(route => $stateProvider.state(ROUTES[route].name, ROUTES[route]));
  })
  .run(($rootScope, authService, authManager) => {
    $rootScope.authService = authService;
    $rootScope.authManager = authManager;
    authManager.checkAuthOnRefresh();
  });

export default moduleName;
