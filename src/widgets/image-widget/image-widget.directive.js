angular.module('imageWidget',[])
.directive('imageWidgetComponent', function() {
  return {
    restrict: 'E',
    scope: {

    },
    templateUrl: './widgets/image-widget/image-widget.template.html',
    link: function($scope) {
      $scope.imageSrc = "https://www.softwarecornwall.org/wp-content/uploads/2015/07/code.jpg";
    }
  };
});
