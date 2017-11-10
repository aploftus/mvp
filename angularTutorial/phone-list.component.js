angular.
  module('phonecatApp').
  component('phoneList', {
    template:
      '<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>' +
        '<table>' +
          '<tr><th>Row number</th></tr>' +
          '<tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]">' +
          '<td>{{i + 1}}</td>' +
          '</tr>' +
        '</table>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });