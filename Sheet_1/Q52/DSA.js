// X Pattern - Min Height = 3
import promptSync from 'prompt-sync';
const prompt = promptSync();
let n = Number(prompt('Enter the number of rows: '));
for(let i =1; i<=n; i++){
    for(let j =1; j<=n; j++){
        if(i===j || i+j === n+1) process.stdout.write("* ");
        else process.stdout.write("  ");
    }
    console.log("\n");
}



