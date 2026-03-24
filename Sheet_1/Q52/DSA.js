//V Pattern - Min Height = 3
let num= 3;
for(let i=1; i<=num; i++){
    for(let j=1; j<=num; j++){
        if(j==i || j==num-i+1){
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }    console.log();
}

