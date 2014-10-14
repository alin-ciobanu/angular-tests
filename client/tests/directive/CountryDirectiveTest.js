
describe('CountryDirective', function() {
    var element, scope, isolatedScope;

    beforeEach(module('countries-app'));
    beforeEach(module('ngMockE2E'));
    beforeEach(module('app/views/countryDirective.html'));

    var russia = {_id: "5437d8808cfa44481faa5571",flagImage: "russia.png",currency: "Ruble",capitalCity: "Moskva",stereotype: "There are only 2 seasons in Russia: winter, and nuclear winter.",name: "Russia",isShown: false,__v: 0};

    beforeEach(inject(function($rootScope, $compile) {

        scope = $rootScope.$new();
        $rootScope.russia = russia;

        element = '<country-line country="russia"></country-line>';

        element = $compile(element)(scope);
        scope.$digest();

        isolatedScope = element.isolateScope();

    }));

    it("should pass", function () {

        expect(isolatedScope.ICONS_PATH).toEqual('app/style/icons/');

    });

    it("should isolate country as =country", function () {

        expect(isolatedScope.country).toEqual(russia);

    });

});
