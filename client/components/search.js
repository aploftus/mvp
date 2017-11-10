angular.module('donorsApp')

.component('search', {
  controller: function() {
    // this.task = {
    //   name: 'search'
    // };
  },

  template:
    '<div>' +
      '<h2>Search Component</h2>' +
      '<input type="text" placeholder="Enter a city, state"></input>' +
      '<input type="submit" value="Search"></submit>' +
      // '<p>Task: {{ $ctrl.task.name }}</p>' +
    '</div>',

});