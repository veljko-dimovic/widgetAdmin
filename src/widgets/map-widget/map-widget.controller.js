export default class mapWidgetController {

  constructor($q, $scope, $filter, $state, $timeout) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;

       var uluru = {lat: -25.363, lng: 131.044};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: uluru
       });
       var marker = new google.maps.Marker({
         position: uluru,
         map: map
       });

  }
}
mapWidgetController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout'];
