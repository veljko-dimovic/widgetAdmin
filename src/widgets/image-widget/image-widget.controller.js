export default class imageWidgetController {

  constructor($q, $scope, $filter, $state, $timeout) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;
    this.imageSrc = "https://www.softwarecornwall.org/wp-content/uploads/2015/07/code.jpg";
  }
}
imageWidgetController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout'];
