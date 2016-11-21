export default class textWidgetController {

  constructor($q, $scope, $filter, $state, $timeout) {
    this._$q = $q;
    this._$scope = $scope;
    this._$state = $state;
    this._$timeout = $timeout;

    this.textData =[];

    for(var i=0;i<100;i++){
      var tempData = {
        'label':"Text data - "+i
      }
        this.textData.push(tempData);
    }
  }
}
textWidgetController.$inject = ['$q', '$scope', '$filter', '$state', '$timeout'];
