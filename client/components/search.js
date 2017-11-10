angular.module('donorsApp')

.component('search', {
  controller: function() {
    this.task = {
      name: 'search'
    };
  },

  template:
    '<div>' +
      '<h2>Search Component</h2>' +
      '<p>Task: {{ $ctrl.task.name }}</p>' +
    '</div>',

});