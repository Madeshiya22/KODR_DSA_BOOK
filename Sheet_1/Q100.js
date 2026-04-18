let mat = [[0,1],[1,0]];
let target = [[1,0],[0,1]];

let n = mat.length;
let found = false;

for (let k = 0; k < 4; k++) {

    // check equal
    let isEqual = true;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== target[i][j]) {
                isEqual = false;
                break;
            }
        }
    }

    if (isEqual) {
        found = true;
        break;
    }

    // 🔁 In-place rotation

    // Step 1: Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        mat[i].reverse();
    }
}

console.log(found);