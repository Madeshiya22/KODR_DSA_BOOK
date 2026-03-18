//13.Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

let gender = 'male';

if (gender === 'male') {
    console.log('Good Morning Sir');
} else if (gender === 'female') {
    console.log('Good Morning Maam');
} else {
    console.log(`Good Morning ${gender}`);
}