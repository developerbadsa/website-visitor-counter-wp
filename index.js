const visitDiv = document.getElementById('wpsvctotal');

// Directly access the text content of the div
let textContent = visitDiv.textContent;

// Replace the text
let newText = textContent.replace('Total Users : ', 'Unsere Online Gäste');

// Update the div's text content
visitDiv.innerHTML = newText;

console.log(newText);


  document.getElementById('sectionForShowTotalUser').remove();


// const visitDiv = document.getElementById('wpsvctotal');

// const textContent = visitDiv.textContent;
// let newText = textContent.replace("Users Today : ", "Unsere Online Gäste ");
// visitDiv.textContent = newText;

// console.log(newText);

