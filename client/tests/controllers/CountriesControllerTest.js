
describe("CountriesController", function () {
    var $scope, $rootScope, $httpBackend, $controller;

    var germany = {"_id":"543c3038c14252641b5ec371","stereotype":"We think that Germany is Germany, but Bavaria is not Germany.","currency":"EUR","flagImage":"germany.png","capitalCity":"Berlin","name":"Germany","isShown":false,"__v":0};
    var russia = {_id: "5437d8808cfa44481faa5571",flagImage: "russia.png",currency: "Ruble",capitalCity: "Moskva",stereotype: "There are only 2 seasons in Russia: winter, and nuclear winter.",name: "Russia",isShown: false,__v: 0};

    beforeEach(module('countries-app'));
    beforeEach(module('ngMockE2E'));

    beforeEach(function() {

        inject(function (_$rootScope_, _$httpBackend_, _$controller_) {
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
        });

        $scope = $rootScope.$new();
        $controller('CountriesController', {
            '$scope': $scope
        });

    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.resetExpectations();
        $rootScope.$destroy();
    });

    var fetchCountriesWithHttpBackend = function (status, data) {
        $httpBackend.expectGET('/api/countries').respond(status, data);
        $httpBackend.flush();
    }

    var postNewCountryToDatabase = function (status, data) {
        $httpBackend.expectPOST('/api/countries').respond(status, data);
        $httpBackend.flush();
    }

    it("should fetch countries on creation", function () {

        fetchCountriesWithHttpBackend(200, [germany]);
        expect($scope.CountriesService.countriesList).toEqual([germany]);

    });

    it("should set success status on successful fetching of countries", function () {

        fetchCountriesWithHttpBackend(200, [germany]);
        expect($scope.status.fetching.success).toEqual(true);
        expect($scope.status.fetching.error).toEqual(false);
        expect($scope.status.fetching.inProgress).toEqual(false);
        expect($scope.status.fetching.message).toEqual("Successfully fetched countries from database.");

    });

    it("should not update countries array if fetching fails", function () {

        fetchCountriesWithHttpBackend(400, "nothing");
        expect($scope.CountriesService.countriesList).toEqual([]);

    });

    it("should set error status on failed fetching", function () {

        fetchCountriesWithHttpBackend(400, [germany]);
        expect($scope.status.fetching.success).toEqual(false);
        expect($scope.status.fetching.error).toEqual(true);
        expect($scope.status.fetching.inProgress).toEqual(false);
        expect($scope.status.fetching.message).toEqual("An error occurred while fetching countries from database.");

    });

    it("should add new country to database", function () {

        fetchCountriesWithHttpBackend(200, [germany]);

        $scope.addNewCountry(russia);
        postNewCountryToDatabase(200, russia);

        expect($scope.CountriesService.countriesList.length).toBe(2);
        expect(_.find($scope.CountriesService.countriesList, function (country) {
            return country.name == "Russia";
        })).toBeDefined();

    });

    it("should not save array locally if POST fails", function () {

        fetchCountriesWithHttpBackend(200, [germany]);

        $scope.addNewCountry(russia);
        postNewCountryToDatabase(400, "FAIL");

        expect($scope.CountriesService.countriesList.length).toBe(1);
        expect(_.find($scope.CountriesService.countriesList, function (country) {
            return country.name == "Russia";
        })).toBeUndefined();

    });

});
