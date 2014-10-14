countriesApp

.controller('CountriesController', [
'$scope', '$timeout', 'CountriesService',
function ($scope, $timeout, CountriesService) {

    $scope.CountriesService = CountriesService;

    $scope.status = {
        fetching: {
            inProgress: true,
            success: false,
            error: false,
            message: ''
        },
        addNewCountry: {
            inProgress: false,
            success: false,
            error: false,
            message: ''
        }
    };

    CountriesService.fetchCountries(
        function () {
            // success

            $scope.status.fetching.inProgress = false;
            $scope.status.fetching.error = false;
            $scope.status.fetching.success = true;
            $scope.status.fetching.message = "Successfully fetched countries from database.";

        },
        function () {
            // error

            $scope.status.fetching.inProgress = false;
            $scope.status.fetching.error = true;
            $scope.status.fetching.success = false;
            $scope.status.fetching.message = "An error occurred while fetching countries from database.";

        }
    );

    $scope.addNewCountry = function (country) {
        CountriesService.addCountryToDatabase(
        country,
        function () {
            // success

            $scope.status.addNewCountry.inProgress = false;
            $scope.status.addNewCountry.error = false;
            $scope.status.addNewCountry.success = true;
            $scope.status.addNewCountry.message = "Successfully added country to database.";

        },
        function () {
            // error

            $scope.status.addNewCountry.inProgress = false;
            $scope.status.addNewCountry.error = true;
            $scope.status.addNewCountry.success = false;
            $scope.status.addNewCountry.message = "An error occurred while saving country to database.";

        });
    }




    $scope.event = {
        name: 'Unit testing with AngularJS',
        date: '17/10/2014',
        time: '15:00 PM',
        imageUrl: 'app/style/images/AngularJS-large.png'
    };

    var updateDate = function () {

        $scope.date = new Date();

        var secondsUntilNextMinute = 60 - $scope.date.getSeconds();

        $timeout(updateDate, secondsUntilNextMinute * 1000 + 10);

    }

    updateDate();

}]);
