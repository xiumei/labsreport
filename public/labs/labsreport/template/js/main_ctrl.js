var module = angular.module('newletter', []);

module.directive('errSrc', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }
    }
});

module.controller('mainCtrl', function ($scope, $location, $http) {
    $scope.Q = $location.search()['Q'];
    $scope.admin = $location.search()['admin'];
    $scope.bust = Date.now();

    $http({
        method: 'GET',
        url: '/labs/labsreport/' + $scope.Q + '/data.json?bust=' + $scope.bust
    }).success(function (data, status, headers, config) {
        $scope.data = data;
        $scope.data.bust = $scope.bust;
    });

});