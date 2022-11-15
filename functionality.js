/*  addEventListener()
    getElementsByTagName()
    getElementsByClassName()
    querySelectorAll() 
    onClick      
    
    პროცენტების მონიშნვნის დროს გადასახდელი თანხას უნდა ემატებოდეს მაგ თანხის მონიშნული პროცენტი და იყოფოდეს 5–ზე 
    
    */

/*  percentage */
let boxOne = document.getElementById("one");
let boxTwo = document.getElementById("two");
let boxThree = document.getElementById("three");
let boxFour = document.getElementById("four");
let boxFive = document.getElementById("five");

/* Inputs */

let input = document.getElementById("inputValue");
let people = document.getElementById("peopleValue");
let rst = document.getElementById("rst");

const paraOne = document.createElement("p");
const paraTwo = document.createElement("p");
const nodeOne = document.createTextNode("Incorrect Value");
const nodeTwo = document.createTextNode("Incorrect Value");

let total = document.getElementById("total");
let tips = document.getElementById("tips");

let customInput = document.getElementById("custom-input");

rst.addEventListener("click", resetFunction);

function resetFunction() {
  input.value = "";
  people.value = "";
  people.style.border = "none";
  input.style.border = "none";
  paraOne.innerText = "";
  paraTwo.innerText = "";
  total.innerText = "$0.00";
  tips.innerText = "$0.00";
  customInput.value = "";
}

/* custom */

customInput.addEventListener("input", myFunc);

function myFunc() {
  if (input.value == 0) {
    paraOne.style.color = "red";
    paraOne.appendChild(nodeOne);
    const element = document.getElementById("container");
    element.appendChild(paraOne);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  if (people.value == 0) {
    paraTwo.style.color = "red";
    paraTwo.appendChild(nodeTwo);
    const element = document.getElementById("second-container");
    element.appendChild(paraTwo);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  function totalValue() {
    if (input.value !== 0 && people.value !== 0) {
      return (
        "$" +
        (input.value / people.value +
          (input.value * customInput.value) / 100 / people.value)
      );
    } else {
      return "Incorret";
    }
  }

  function tipsValue() {
    if (input.value !== 0 && people.value !== 0) {
      return "$" + (input.value * customInput.value) / 100 / people.value;
    } else {
      return "Incorret";
    }
  }

  document.getElementById("total").innerHTML = totalValue();
  document.getElementById("tips").innerHTML = tipsValue();
}

/* box one */

boxOne.addEventListener("click", myFunctionOne);

function myFunctionOne() {
  if (input.value == 0) {
    paraOne.style.color = "red";
    paraOne.appendChild(nodeOne);
    const element = document.getElementById("container");
    element.appendChild(paraOne);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  if (people.value == 0) {
    paraTwo.style.color = "red";
    paraTwo.appendChild(nodeTwo);
    const element = document.getElementById("second-container");
    element.appendChild(paraTwo);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  function totalValue() {
    if (input.value !== 0 && people.value !== 0) {
      return (
        "$" +
        (input.value / people.value + (input.value * 5) / 100 / people.value)
      );
    } else {
      return "Incorret";
    }
  }

  function tipsValue() {
    if (input.value !== 0 && people.value !== 0) {
      return "$" + (input.value * 5) / 100 / people.value;
    } else {
      return "Incorret";
    }
  }

  document.getElementById("total").innerHTML = totalValue();
  document.getElementById("tips").innerHTML = tipsValue();
}

/* box two */
boxTwo.addEventListener("click", myFunctionTwo);

function myFunctionTwo() {
  if (input.value == 0) {
    paraOne.style.color = "red";
    paraOne.appendChild(nodeOne);
    const element = document.getElementById("container");
    element.appendChild(paraOne);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  if (people.value == 0) {
    paraTwo.style.color = "red";
    paraTwo.appendChild(nodeTwo);
    const element = document.getElementById("second-container");
    element.appendChild(paraTwo);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  function totalValue() {
    if (input.value !== 0 && people.value !== 0) {
      return (
        "$" +
        (input.value / people.value + (input.value * 10) / 100 / people.value)
      );
    } else {
      return "Incorret";
    }
  }

  function tipsValue() {
    if (input.value !== 0 && people.value !== 0) {
      return "$" + (input.value * 10) / 100 / people.value;
    } else {
      return "Incorret";
    }
  }

  document.getElementById("total").innerHTML = totalValue();
  document.getElementById("tips").innerHTML = tipsValue();
}

/* box three */

boxThree.addEventListener("click", myFunctionThree);

function myFunctionThree() {
  if (input.value == 0) {
    paraOne.style.color = "red";
    paraOne.appendChild(nodeOne);
    const element = document.getElementById("container");
    element.appendChild(paraOne);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  if (people.value == 0) {
    paraTwo.style.color = "red";
    paraTwo.appendChild(nodeTwo);
    const element = document.getElementById("second-container");
    element.appendChild(paraTwo);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  function totalValue() {
    if (input.value !== 0 && people.value !== 0) {
      return (
        "$" +
        (input.value / people.value + (input.value * 15) / 100 / people.value)
      );
    } else {
      return "Incorret";
    }
  }

  function tipsValue() {
    if (input.value !== 0 && people.value !== 0) {
      return "$" + (input.value * 15) / 100 / people.value;
    } else {
      return "Incorret";
    }
  }

  document.getElementById("total").innerHTML = totalValue();
  document.getElementById("tips").innerHTML = tipsValue();
}

/* box four */

boxFour.addEventListener("click", myFunctionFour);

function myFunctionFour() {
  if (input.value == 0) {
    paraOne.style.color = "red";
    paraOne.appendChild(nodeOne);
    const element = document.getElementById("container");
    element.appendChild(paraOne);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  if (people.value == 0) {
    paraTwo.style.color = "red";
    paraTwo.appendChild(nodeTwo);
    const element = document.getElementById("second-container");
    element.appendChild(paraTwo);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  function totalValue() {
    if (input.value !== 0 && people.value !== 0) {
      return (
        "$" +
        (input.value / people.value + (input.value * 25) / 100 / people.value)
      );
    } else {
      return "Incorret";
    }
  }

  function tipsValue() {
    if (input.value !== 0 && people.value !== 0) {
      return "$" + (input.value * 25) / 100 / people.value;
    } else {
      return "Incorret";
    }
  }

  document.getElementById("total").innerHTML = totalValue();
  document.getElementById("tips").innerHTML = tipsValue();
}

/* box five */
boxFive.addEventListener("click", myFunctionFive);

function myFunctionFive() {
  if (input.value == 0) {
    paraOne.style.color = "red";
    paraOne.appendChild(nodeOne);
    const element = document.getElementById("container");
    element.appendChild(paraOne);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  if (people.value == 0) {
    paraTwo.style.color = "red";
    paraTwo.appendChild(nodeTwo);
    const element = document.getElementById("second-container");
    element.appendChild(paraTwo);
    (people.style.border = "2px solid #E17052"),
      (input.style.border = "2px solid #E17052");
  }

  function totalValue() {
    if (input.value !== 0 && people.value !== 0) {
      return (
        "$" +
        (input.value / people.value + (input.value * 50) / 100 / people.value)
      );
    } else {
      return "Incorret";
    }
  }

  function tipsValue() {
    if (input.value !== 0 && people.value !== 0) {
      return "$" + (input.value * 50) / 100 / people.value;
    } else {
      return "Incorret";
    }
  }

  document.getElementById("total").innerHTML = totalValue();
  document.getElementById("tips").innerHTML = tipsValue();
}
