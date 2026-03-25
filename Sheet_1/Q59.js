//Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.
  let n = Number(prompt('Enter the size of the array: '));
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`Enter element ${i + 1}: `));
    }
    let temp = new Array(n);
    let i = arr.length - 1;
    for (let j = 0; j < arr.length; j++) {
        temp[j] = arr[i];
        i--;
    }
    console.log("original Array")
    console.log(arr);
    console.log("Reverse array")
    console.log(temp)
