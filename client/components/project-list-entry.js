angular.module('donorsApp')

.component('projectListEntry', {
  bindings: {
    project: '<'
  },

  controller: function() {

  },

  template:
    '<div>' +
      '<h2>Project List Entry Component</h2>' +
      '<div>{{$ctrl.project.title}}</div>' +
      '<div>{{$ctrl.project.city}}</div>' +
      '<div>{{$ctrl.project.state}}</div>' +
      '<div>{{$ctrl.project.expirationDate}}</div>' +
    '</div>',

});