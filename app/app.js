import TodoService from './src/TodoService';
import TodoCtrl from './src/TodoCtrl';

angular
  .module('app', [
    'ngAnimate',
    'angular-growl'
  ])
  .service('TodoService', TodoService)
  .controller('TodoController', TodoCtrl);
