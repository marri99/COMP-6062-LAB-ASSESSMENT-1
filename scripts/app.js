console.log('')
const myFullName = 'Mounika Marri';
const myStudentNumber = '1156879';
const result = `${myFullName}-${myStudentNumber}`;
console.log(result);
let headerContent = document.querySelector('h1');
headerContent.innerHTML = result;
headerContent.classList.add('headingPrimary');