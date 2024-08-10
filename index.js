const visitDiv = document.getElementById('wpsvctotal');
  const targetElement = document.querySelector('.e-con.e-flex>.e-con-inner');
const layoutRight =  document.getElementById('sectionForShowTotalUser')

// Directly access the text content of the div
let textContent = visitDiv.textContent; //here example result display: Total Users 46

// Replace the text
let getnumber = textContent.replace('Total Users : ', ' ');
let textToNumber = parseInt(getnumber);

if (textToNumber > 100) {
  // Update the div's text content
  console.log('up to 1000');
  layoutRight.setAttribute('style', 'display: inline !important;');
  visitDiv.innerHTML = `<span style='color:#fff'>Unsere Online Gäste ${textToNumber}</span>`;
}
 else {
 layoutRight.remove();

  // Get a reference to the element you want to style


 // Apply the desired styles
  targetElement.style.justifyContent = 'center';
}

// If you want to log the updated text content, do this:
console.log(textToNumber);
