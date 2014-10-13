
describe("AddressDefinitions service", function () {

    var $httpBackend, CountriesService;

    var germany = {"_id":"543c3038c14252641b5ec371","stereotype":"We think that Germany is Germany, but Bavaria is not Germany.","currency":"EUR","flagImage":"germany.png","capitalCity":"Berlin","name":"Germany","isShown":false,"__v":0};

    beforeEach(module('countries-app'));
    beforeEach(module('ngMockE2E'));

    beforeEach(function() {

        inject(function (_$httpBackend_, _CountriesService_) {
            $httpBackend = _$httpBackend_;
            CountriesService = _CountriesService_;

        });

    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it ("should contain an empty array on initialization", function () {

        expect(CountriesService.countriesList.length).toBe(0);

    });

    it ("should successfully fetch countries from database", function () {

        $httpBackend.expectGET('/api/countries').respond(200, [germany]);

        CountriesService.fetchCountries();
        $httpBackend.flush();

        expect(CountriesService.countriesList.length).toBe(1);
        expect(CountriesService.countriesList[0]).toEqual(germany);

    });

    it ("fetchCountries should call success callback given as param on success", function () {

        var successCallback = jasmine.createSpy('success');
        var errorCallback = jasmine.createSpy('error');

        $httpBackend.expectGET('/api/countries').respond(200, [germany]);
        CountriesService.fetchCountries(successCallback, errorCallback);
        $httpBackend.flush();

        expect(successCallback).toHaveBeenCalledWith([germany]);
        expect(errorCallback).not.toHaveBeenCalled();

    });

    it ("fetchCountries should call error callback given as param on error", function () {

        var successCallback = jasmine.createSpy('success');
        var errorCallback = jasmine.createSpy('error');

        $httpBackend.expectGET('/api/countries').respond(400, {message: "Can't fetch countries."});
        CountriesService.fetchCountries(successCallback, errorCallback);
        $httpBackend.flush();

        expect(successCallback).not.toHaveBeenCalled();
        expect(errorCallback).toHaveBeenCalledWith({message: "Can't fetch countries."});

    });


    // TODO -- addCountryToDatabase test


});
