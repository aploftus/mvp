angular.module('donorsApp')

.component('projectList', {
  controller: function() {
    
    this.projects = [
      {
        title: 'title1',
        city: 'city1',
        state: 'state1',
        costToComplete: 'costToComplete1',
        expirationDate: 'expirationDate1'
      },
      {
        title: 'title2',
        city: 'city2',
        state: 'state2',
        costToComplete: 'costToComplete2',
        expirationDate: 'expirationDate2'
      },
      {
        title: 'title3',
        city: 'city3',
        state: 'state3',
        costToComplete: 'costToComplete3',
        expirationDate: 'expirationDate3'
      }
    ];
  },

  template:
    '<div>' +
      '<h2>Projects List Component</h2>' +
      '<div>Total projects: {{$ctrl.projects.length}}</div>' +
      '<div class="project-list">' +
        '<project-list-entry ng-repeat="project in $ctrl.projects" project="project"></project-list-entry>' +
      '</div>' +
    '</div>',

});