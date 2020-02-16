/**1. */
function filterOutOdds (...nums) {
    return nums.filter(num => {
        return num % 2 === 0;
    });
}

/**2. */
function findMin (...nums) {
    return nums.reduce((acc, next) => {
        return acc < next ? acc : next;
    }); 
}

/**3. */
function mergeObjects (obj1, obj2) {
    return {...obj1, ...obj2};
}

/**4. */
function doubleAndReturnArgs (arr, ...rest) {
    return [...arr, ...rest.map(element => element * 2)];
}


/** remove a random element in the items array and return an array without that item. */
const test = [1,2,4,5,7,8,24,67];

function removeRandom(items) {
    let index = Math.floor(Math.random() * items.length); // create a index number according to the length of the array
    return [...items.slice(0, index), ...items.slice(index, 1)] // slice & join together
}

/** Add every item in array2 to array1. */
function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Add a new key/val to an object. */
function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
    // return {...obj, ...key[val]};
}


/** Remove a key from an object. */
function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects. */
function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Update an object, changing a key/value. */
function update(obj, key, val) { // same as addKeyVal
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}