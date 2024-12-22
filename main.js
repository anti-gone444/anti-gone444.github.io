const textContent1 = document.getElementById('text-content1');
const textContent2 = document.getElementById('text-content2');
const textContent3 = document.getElementById('text-content3');
const textContent4 = document.getElementById('text-content4');
const textContent5 = document.getElementById('text-content5');
const textContent6 = document.getElementById('text-content6');
const textContent7 = document.getElementById('text-content7');
const question = document.getElementById('question');
const button = document.getElementById('button');
const cursor = document.getElementById('cursor');
const inputfield = document.getElementById('mobile-type');
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');
const counter4 = document.getElementById('counter4');
const counter5 = document.getElementById('counter5');
const counter6 = document.getElementById('counter6');
const counter7 = document.getElementById('counter7');

let text = null;
let textContent = null;

// document.body.addEventListener('keydown', function (event) {
document.body.addEventListener('keyup', function (event) {
  question.classList.add('hidden');

  // alert(event.key)

  /* first keystroke */
  if(text == null) {
    // desktop
    if(event.key !== "Unidentified"){
      checkWhichKeyWasPressed(event.key);
      // mobil
    } else {
      checkWhichKeyWasPressed(inputfield.value);
    }
    /* next keystroke */
  } else {
      const nextItemInTextArray = text[0];
      /* if there are still words in text array */
      if (nextItemInTextArray !== undefined) {
        /* add next word to text content element */
        textContent.innerHTML += nextItemInTextArray + ' ';
        /* remove that word from text array */
        text.shift();
        /* if no more words are left, show back button */
      } else {
        button.classList.remove('hidden');
        cursor.classList.add('hidden');
              /*press enter to reload*/
              if (key == "Enter") {
                console.log("Enter");
                history.go(); 
              }
      }
    }

    // scroll to bottom of text
    scrollToBottomOfDiv();

    button.onclick = function(){
      //page refresh:
      history.go()
    };

});

function scrollToBottomOfDiv() {
  window.scrollTo(0, document.body.scrollHeight);
}

function checkWhichKeyWasPressed(key){

  if( key == "a" || key == "A" || key == "r" || key == "R" || key == "y" || key == "w" || key == "W"  || key == "1" ){
    text = text1;
    textContent = textContent1;
    counter1.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("works")
   } 

   else  if ( key == "o" || key == "O" || key == "p" || key == "P" || key == "f" || key == "F" || key == "V" ||  key == "2" ){
    text = text2;
    textContent = textContent2;
    counter2.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("works too")
   }

   else  if ( key == "e" || key == "E" ||  key == "C" || key == "g" ||  key == "G" || key == "q" || key == "Q" || key == "3" || key == "Enter"){
    text = text3;
    textContent = textContent3;
    counter3.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("works as well");
  }

  else  if (  key == "i" || key == "I" || key == "l" || key == "L" || key == "u" || key == "U" || key == "j" || key == "J" || key == "4" || key == "Tab"){
    text = text4;
    textContent = textContent4;
    counter4.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("text4");
  }

  else  if ( key == "t" || key == "T" || key == "d" || key == "D" || key == "h" || key == "H" || key == "k" || key == "K" || key == "5" || key == "Backspace"){
    text = text5;
    textContent = textContent5;
    counter5.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("text5");
  }

  else  if ( key == "n" || key == "N" || key == "m" || key == "M" || key == "b" || key == "B" || key == "z" || key == "Z" || key == "6" || key == ","||  key == "."){
    text = text6;
    textContent = textContent6;
    counter6.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("text6");
  }

  else if ( key == "s" || key == "S" || key == "0" || key == "x" || key == "X" || key == "8" || key == "9" || key == "7" || key == "CapsLock"){
    text = text7;
    textContent = textContent7;
    counter7.classList.remove('hidden');
    inputfield.classList.add('invisible')
    console.log("text7");
  }

  else {
    text = text5;
    textContent = textContent1;
    console.log("text1");
    counter1.classList.remove('hidden');
  }

  const nextItemInTextArray = text[0];
  /* if there are still words in text array */
  if (nextItemInTextArray !== undefined) {
    /* add next word to text content element */
    textContent.innerHTML += nextItemInTextArray + ' ';
    /* remove that word from text array */
    text.shift();
  }
}

/*pop-up about*/
about.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});