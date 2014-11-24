angular
  .module('app', [
        'ngAnimate',
        'angular-growl'
  ])
  .service('TodoService', TodoService)
  .controller('TodoController', TodoCtrl);
