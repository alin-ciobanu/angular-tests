
countriesApp

.factory('AddressDefinitions', [
function () {
    return {
        api: {
            countries: {
                get: "/api/countries",
                post: "/api/countries",
                getByName: "/api/countries/byName"
            }
        }
    }
}
])

.factory('CountriesService', [
'$http', 'AddressDefinitions',
function ($http, AddressDefinitions) {

    var thisService = {};

    thisService.countriesList = [];

    thisService.fetchCountries = function (onSuccess, onError) {
        $http.get(AddressDefinitions.api.countries.get)
            .success(function (data) {
                thisService.countriesList = data;
                if (typeof onSuccess === 'function') {
                    onSuccess(data);
                }
            })
            .error(function (response) {
                if (typeof onError === 'function') {
                    onError(response);
                }
            });
    }

    thisService.addCountryToDatabase = function (country, onSuccess, onError) {
        $http.post(AddressDefinitions.api.countries.post, country)
            .success(function (data) {
                thisService.countriesList.push(country);
                if (typeof onSuccess === 'function') {
                    onSuccess();
                }
            })
            .error(function (response) {
                if (typeof onError === 'function') {
                    onError();
                }
            });
    }

    return thisService;

}]);
