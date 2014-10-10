
countriesApp.filter('expandedFirst', function () {

    return function (inputArray) {

        var expandedArray = [];
        var notExpandedArray = [];

        for (var i in inputArray) {
            var country = inputArray[i];
            if (country.isShown) {
                expandedArray.push(country);
            }
            else {
                notExpandedArray.push(country);
            }
        }

        return expandedArray.concat(notExpandedArray);

    };

})