countriesApp

.controller('CountriesController', ['$scope', '$timeout', 'CountriesService',
    function ($scope, $timeout, CountriesService) {

        $scope.event = {
            name: 'Unit testing with AngularJS',
            date: '17/10/2014',
            time: '15:00 PM',
            imageUrl: 'app/style/images/AngularJS-large.png'
        }

        $scope.CountriesService = CountriesService;

        CountriesService.fetchCountries();

        $scope.addCountry = function (newCountry) {
            newCountry.flagImage = newCountry.name.toLowerCase() + '.png';
            newCountry.isShown = false;
            $scope.countries.push(newCountry);
        }


        $scope.addNewCountry = function (country) {
            CountriesService.addCountryToDatabase(
            country,
            function () {
                // success
            },
            function () {
                // error
            });
        }




        var updateDate = function () {

            $scope.date = new Date();

            var secondsUntilNextMinute = 60 - $scope.date.getSeconds();

            $timeout(updateDate, secondsUntilNextMinute * 1000 + 10);

        }

        updateDate();

    }])