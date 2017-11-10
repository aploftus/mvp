angular.module('donorsApp')

.component('projectList', {
  controller: function() {
    this.school = {
      name: 'Hack Reactor'
    };
  },

  template:
    '<div>' +
      '<h2>Projects List Component</h2>' +
      '<p>School: {{ $ctrl.school.name }}</p>' +
    '</div>',

});