function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let row = new Array(rows).fill(0);
    let col = new Array(cols).fill(0);

    // mark rows and cols
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    // set zeroes
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (row[i] === 1 || col[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

let matrix = [[1,0,1],
[1,1,1],
[1,1,1]];
console.log(setZeroes(matrix));