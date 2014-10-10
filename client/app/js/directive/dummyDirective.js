
countriesApp

.directive('dummy',
function () {

    return {

        restrict: 'E',
        templateUrl: 'app/views/dummy.html',
        replace: true,
        scope: {
            aPrimitiveValue: '='
        },

        link: function (scope, element, attrs) {



        }

    }

})