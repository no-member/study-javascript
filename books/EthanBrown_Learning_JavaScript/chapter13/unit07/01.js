function findNeedle(haystack) {
    if (haystack.length === 0) {
        return 'no haystack hear!';
    }

    if (haystack.shift() === 'needle') {
        return 'found it!';
    }

    return findNeedle(haystack);
}

console.log(
    findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'needle', 'hay'])
);

