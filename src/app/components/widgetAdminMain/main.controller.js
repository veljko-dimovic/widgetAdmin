export default class mainComponentController {

  constructor($q, $scope, $filter, $state, $timeout) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;

  }

  $onInit() {
  }

}
mainComponentController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout'];
