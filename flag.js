//change flag
function changeFlag() {
    var flag_img = document.getElementById('flag-container');
     var flag_img_src = document.getElementById('currency').options[document.getElementById('currency').selectedIndex].value;
    flag_img_src = "'"+flag_img_src+"'";

    new_img = `<img class="flag-icon" src=${flag_img_src} alt="flag">`;
    flag_img.innerHTML = new_img;
    
}

//click somewhere & close 
document.addEventListener('click', function(e) {
  var container = document.getElementById('fashion');
  if (!container.contains(e.target)) {
  container.style.display = 'none';
  }
});


//cross button
   function offmode(){
    var fashion = document.getElementById('fashion');
     fashion.style.display='none';
 }

 function offmode(){
    var fashionBoy = document.getElementById('fashionBoy');
     fashionBoy.style.display='none';
 }


//dispaly after some time 

function displaySection() {
    const mySection = document.getElementById("fashion");
    mySection.style.display = "block";
  }
  setTimeout(displaySection, 3000);



//display boy section after clicking the button 
  const showButton = document.getElementById("showButton");
   
  showButton.onclick = function () {

    const fashionBoy = document.getElementById("fashionBoy");
        fashionBoy.style.display = "block";
};
//another section open & one close
function openForm(){
  document.getElementById('fashion').style.display='none';
  document.getElementById('fashionBoy').style.display='block';
}


//No thank you  button
function closeForm1(){
  var fashion = document.getElementById('fashion');
   fashion.style.display='none';
}

function closeForm2(){
  var fashionBoy = document.getElementById('fashionBoy');
   fashionBoy.style.display='none';
}