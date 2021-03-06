/**
 * sumScores function takes as input an object that stores grades for our group's homework assignments.
 * The function returns the sum of all points in response.
 * 
 * @param {Object} scores - The scores of the group.
 * @returns {number}
 */
function sumScores(scores) {
    const values = Object.values(scores);

    if (values.some(v => typeof v !== 'number')) {
        return NaN;
    }

    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

export { sumScores };
