BACKGROUNDS = ['tree.jpg', 'hydrangea.jpg', 'flower.jpg'];

var app = angular.module('app', ['app.directive']);

app.controller('ResourceManageController', ['$scope', function ($scope) {
    $scope.background = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
}]);

angular.module('app.directive', [])
    .directive('pageBackground', function ($parse) {
        return {
            link: function (scope, elm, attrs) {
                scope.$watch(attrs.pageBackground, function (url) {
                    if (angular.isUndefined(url)) {
                        return;
                    }
                    elm.css({
                        'background': 'url(' + url + ') no-repeat center center fixed',
                        '-webkit-background-size': 'cover',
                        '-moz-background-size': 'cover',
                        '-o-background-size': 'cover',
                        'background-size': 'cover'
                    });
                });
            }
        };

    });