angular.module('donorsApp')
.component('app', {
  bindings: {},
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
  templateUrl: '/templates/app.html',
})

