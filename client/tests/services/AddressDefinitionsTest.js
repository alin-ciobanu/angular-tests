
describe("AddressDefinitions service", function () {

    var AddressDefinitions;

    beforeEach(module('countries-app'));
    beforeEach(module('ngMockE2E'));

    beforeEach(function() {

        inject(function (_AddressDefinitions_) {
            AddressDefinitions = _AddressDefinitions_;
        });

    });

    afterEach(function () {
        console.log("This is a simple test.");
    });

    it("should always pass", function () {
        expect(true).toBeTruthy();
    });

    it ("should define addresses", function () {

        expect(AddressDefinitions.api.countries).toBeDefined();
        expect(AddressDefinitions.api.countries).toEqual({
            get: "/api/countries",
            post: "/api/countries",
            getByName: "/api/countries/byName"
        });

    });

});

