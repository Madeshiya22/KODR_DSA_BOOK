//Linear Search an array - If element found print the index, else -1
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let arr = [1,2,3,4,5,6,7,8,9,10];
let t = Number(prompt("Enter the element to search: "));
let index = -1;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === t){
        index = i;

    }

}
console.log(index === -1 ? "not found" :`found at index at ${index}`)