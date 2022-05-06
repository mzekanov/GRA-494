document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit');
    const closeBtn4 = document.querySelector('.close4');
    const contactformoverlay = document.querySelector('.contactform-overlay');
  
    submit.addEventListener('click', () => {
      contactformoverlay.style.display = 'block';
    });
  
    closeBtn4.addEventListener('click', () => {
      contactformoverlay.style.display = 'none';
    });
  
  });
  

  
  $("#myForm").submit(function(e) {
    e.preventDefault();
});
  


function displayText(){
  // Selecting the input element and get its value --- FIRST NAME
  var text = document.getElementById("fname").value;
  
  // Displaying the value
  var output = document.getElementById("first-name");
  output.innerHTML = text;



  // Selecting the input element and get its value --- LAST NAME
  var text2 = document.getElementById("lname").value;
  
  // Displaying the value
  var output2 = document.getElementById("last-name");
  output2.innerHTML = text2;



  // Selecting the input element and get its value --- MESSAGE
  var text3 = document.getElementById("message").value;
  
  // Displaying the value
  var output3 = document.getElementById("message-content");
  output3.innerHTML = text3;


}
