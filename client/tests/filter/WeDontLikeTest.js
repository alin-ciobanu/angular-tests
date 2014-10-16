describe('WeDontLikeFilter', function(){

    var russia = {"_id":"5437d8808cfa44481faa5571","flagImage":"russia.png","currency":"Ruble","capitalCity":"Moskva","stereotype":"There are only 2 seasons in Russia: winter, and nuclear winter.","name":"Russia","isShown":false,"__v":0};
    var netherlands = {"_id":"543f8dbc3d80fa4419cf75f0","currency":"EUR","capitalCity":"Amsterdam","stereotype":"Amsterdam is like a Tour de France. Just a lot of people on drugs riding bikes.","flagImage":"netherlands.png","name":"Netherlands","isShown":false,"__v":0};
    var scotland = {"_id":"543f8df23d80fa4419cf75f1","flagImage":"scotland.png","capitalCity":"Edinburgh","currency":"Pounds","stereotype":"Never make fun of a Scotsman\\'s traditional garb. You could get kilt that way","name":"Scotland","isShown":false,"__v":0};
    var italy = {"_id":"543f8e153d80fa4419cf75f2","flagImage":"italy.png","currency":"EUR","capitalCity":"Rome","stereotype":"If the Berlin wall would have been built by Italians it would have come down on its own.","name":"Italy","isShown":false,"__v":0};

    var countriesArray = [russia, netherlands, scotland, italy];

    beforeEach(module('countries-app'));
    beforeEach(module('ngMockE2E'));

    beforeEach(function () {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it ("should exclude unwanted element from the array", function () {

        expect($filter('weDontLike')(countriesArray, russia.name)).toEqual([netherlands, scotland, italy]);

    });

    it ("should not exclude an element if it is not found", function () {

        expect($filter('weDontLike')(countriesArray, "RandomFakeCountryName")).toEqual(countriesArray);

    });

    it ("should exclude an element even if it the last in the array", function () {

        expect($filter('weDontLike')(countriesArray, italy.name)).toEqual([russia, netherlands, scotland]);

    });

    it ("should work even if the countries array is empty", function () {

        expect($filter('weDontLike')([], italy.name)).toEqual([]);

    });

    it ("should exclude the unwanted country even if the country is  the only one in the array", function () {

        expect($filter('weDontLike')([italy], italy.name)).toEqual([]);

    });

    it ("should work even if the countries array is null or undefined", function () {

        expect($filter('weDontLike')(null, italy.name)).toBe(null);
        expect($filter('weDontLike')(undefined, italy.name)).toBe(undefined);

    });

});