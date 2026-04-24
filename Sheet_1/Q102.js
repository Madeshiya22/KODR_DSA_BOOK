// valid sudoku
/** * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Array(9).fill(0).map(()=> new Set());
    let cols = new Array(9).fill(0).map(()=> new Set());
    let boxes = new Array(9).fill(0).map(()=> new Set());

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
           let num = board[i][j];
           if(num === "0")continue

           let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
           if(rows[i].has(num)|| 
        cols[j].has(num)||
        boxes[boxIndex].has(num)){
            return false;
        }
        rows[i].add(num);
        rows[j].add(num);
        boxes[boxIndex].add(num);
        }
    }
    return true;
}

let board = [
    ["5","3","0","0","7","0","0","0","0"],
    ["6","0","0","1","9","5","0","0","0"],
    ["0","9","8","0","0","0","0","6","0"],
    ["8","0","0","0","6","0","0","0","3"],
    ["4","0","0","8","0","3","0","0","1"],
    ["7","0","0","0","2","0","0","0","6"],
    ["0","6","0","0","0","0","2","8","0"],
    ["0","0","0","4","1","9","0","0","5"],
    ["0","0","0","0","8","0","0","7","9"]
]

console.log(isValidSudoku(board))