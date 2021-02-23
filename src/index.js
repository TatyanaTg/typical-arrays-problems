exports.min = function mini(array) {

    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
};

exports.max = function max(array) {

    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            count++;
        }
        return sum / count;
    }
};
