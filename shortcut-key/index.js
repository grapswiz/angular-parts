var STORIES = [
    {
        title: 'Ants are laying siege to the world\'s chocolate supply',
        link: 'http://www.aeonmagazine.com/nature-and-cosmos/what-can-ants-teach-us-about-agriculture/',
        date: 1375366780,
        author: 'dwight'
    },
    {
        title: 'You Need To Be An Asshole to Be Great',
        link: 'https://news.layervault.com/stories/6333-you-dont-need-to-be-an-asshole-to-be-great',
        author: 'pete',
        date: 1375717811741
    },
    {
        title: 'Helpers for testing Passport strategies with the Chai assertion library',
        link: 'https://github.com/jaredhanson/chai-passport-strategy',
        author: 'pat',
        date: 1375717811741
    },
    {
        title: 'Anima : CSS animations with a soul',
        link: 'http://lvivski.com/anima/',
        author: 'yuuto',
        date: 1375717811741
    }
];

var app = angular.module('app', ['app.directive']);

app.controller('StoryListController', ['$scope', '$window', function ($scope, $window) {
    $scope.stories = STORIES;
    $scope.stories[0].focused = true;
    $scope.keydown = function (index) {
        if (index >= $scope.stories.length) {
            return;
        }

        $scope.stories.forEach(function (elm) {
            elm.focused = false;
        });

        $scope.stories[index].focused = true;
    };
    $scope.up = function (index) {
        if (index < 0) {
            return;
        }

        $scope.stories.forEach(function (elm) {
            elm.focused = false;
        });

        $scope.stories[index].focused = true;
    };
    $scope.enter = function (index) {
        $window.location.href = $scope.stories[index].link;
    };
}]);

angular.module('app.directive', [])
    .directive('keydown', function () {
        return function (scope, elm, attr) {
            elm.bind('keydown', function (e) {
                switch (e.keyCode) {
                    case 34:
                    case 39:
                    case 40:
                    case 74:
                        return scope.$apply(attr.down);

                    case 32:
                        e.preventDefault();
                        return scope.$apply(attr.vSpace);

                    case 33:
                    case 37:
                    case 38:
                    case 75:
                        return scope.$apply(attr.up);
                }
            });
        };
    })
    
    .directive('focus', function ($parse) {
        return function (scope, elm, attr) {
            scope.$watch(attr.focus, function (focused) {
                if (!focused) {
                    return;
                }
                if (focused) {
                    elm[0].focus();
                }
            });
        };
    });