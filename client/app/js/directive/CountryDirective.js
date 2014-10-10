
countriesApp

    .directive('countryLine', [
    function () {

        return {

            restrict: 'E',
            templateUrl: 'app/views/countryDirective.html',
            replace: true,
            scope: {
                country: '='
            },

            link: function (scope, element, attrs) {

                scope.ICONS_PATH = 'app/style/icons/';


            }

        }

    }]);

