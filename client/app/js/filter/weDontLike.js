
countriesApp.filter('weDontLike', function () {

    return function (inputArray, nameToExclude) {

        if (!angular.isDefined(nameToExclude) || !inputArray) {
            return inputArray;
        }

        var filteredArray = [];

        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i].name.toLowerCase() != nameToExclude.toLowerCase()) {
                filteredArray.push(inputArray[i]);
            }
        }

        return filteredArray;

    }

})