let myHeading = document.querySelector('h1');

//comment
/*comment*/
myHeading.textContent = multiply(4,100);
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let myScr=myImage.getAttribute('src');
    if(myScr==='images/beagle-dog.jpg'){
        myHeading.textContent = multiply(8,100);
        myImage.setAttribute('src',"images/cat-1.png");
      
    } else{
        myHeading.textContent = multiply(5,100);
        myImage.setAttribute('src',"images/beagle-dog.jpg")
     
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function() {setUserName(); }
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

function multiply(num1,num2){
    let result=num1*num2;
    return result;
};
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/