
countriesApp.filter('weDontLike', function () {

    return function (inputArray, nameToExclude) {

        var filteredArray = [];

        if (!angular.isDefined(nameToExclude)) {
            return inputArray;
        }

        for (var i in inputArray) {
            if (inputArray[i].name.toLowerCase() != nameToExclude.toLowerCase()) {
                filteredArray.push(inputArray[i]);
            }
        }

        return filteredArray;

    }

})