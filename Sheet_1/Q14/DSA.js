//14. Extend the previous program and handle the wrong inputs.
// Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

let gender = prompt('Enter your gender (male/female):');

console.log(
    gender === 'male' || gender === 'Male' ? 'Good Morning Sir' :
    gender === 'female' || gender === 'Female' ? 'Good Morning Maam' :
    'Wrong Input'
)