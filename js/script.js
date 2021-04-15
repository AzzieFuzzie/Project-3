// All Selected Dom elements referenced in variables in chronological order

const formName = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role");
const jobs = document.getElementById("title");
const designShirt = document.getElementById("design");
const colorOptions = document.getElementById("color");
const colorOptions1 = document.getElementById("color").children;
const activities = document.getElementById("activities");
const total = document.getElementById("activities-cost");
const creditCard = document.querySelector(".credit-card");
const payPal = document.querySelector(".paypal");
const bitCoin = document.querySelector(".bitcoin");
const paymentMethod = document.getElementById("payment");
const form = document.querySelector("form");
const activityInputs = document.querySelectorAll("input[type=checkbox]");
const nameValid = document.querySelector("input[type=text]");
const emailValid = document.querySelector("input[type=email]");
const cost = document.querySelector("input[data-cost]");
const input = document.querySelectorAll("input");
const cardValid = document.getElementById("cc-num");
const zipValid = document.getElementById("zip");
const cvvValid = document.getElementById("cvv");
const label = document.querySelectorAll("label");
const hint = document.querySelectorAll("hint")
const activitiesHint = document.getElementById("activities-hint")

// Focuses on name upon refresh
formName.focus();

// Hides other job role upon refresh
otherJobRole.style.display = "none";

// Hides and unhides other job role when other is clicked
jobs.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

// disables shirt colors based on selection
// Attempt 3(walkthrough)

colorOptions.disabled = true;


designShirt.addEventListener('change',(e)=>{

  colorOptions.disabled =false;

  for (let i = 0; i < colorOptions.children.length; i++) {
   const target = e.target.value;
   const getAttribute = colorOptions[i].getAttribute("data-theme");
    console.log(getAttribute);
    if (getAttribute === target) {
      colorOptions[i].hidden = false; 
      colorOptions[i].setAttribute("selected","true");
    } else {
      colorOptions[i].hidden = true; 
      colorOptions[i].removeAttribute("selected");
    }
  }
});

// Attempt2

// designShirt.addEventListener("change", (e) => {
//   colorOption.disabled = false;
//   for (let i = 0; i < colorOption.children.length; i++) {
//     colorOption[i].hidden = true;
//     if ((e.target.value === "js puns")) {
//      const jsPuns = colorOption[i].getAttribute('data-theme');
//      if (jsPuns === 'js puns'){
//         colorOption[i].hidden = false;
     
//      }
//     } else if ((e.target.value = "heart.js")) {
//       const heartJs = colorOption[i].getAttribute('data-theme');
//       if (heartJs === 'heart js'){
//         colorOption[i].hidden = false;
  
//      }
//     }
//   }
// });

 
// Attempt1

// designShirt.addEventListener("change", (e) => {
//   colorOption.disabled = false;
//   for (let i = 0; i < colorOption.children.length; i++) {
//     colorOption[i].style.display = "none";
//     if ((e.target.value = "js puns")) {
//       colorOption[(0, 1, 2)].style.display = "block";
//     } else {
//       colorOption[(4, 5)].style.display = "block";
//     }
//   }
// });

// Activities

let totalCost = 0;

activities.addEventListener("change", (e) => {
  const activitySelected = e.target.getAttribute("data-cost");
  const activityNo = +activitySelected;

  if (e.target.checked) {
    totalCost += activityNo;
    console.log(totalCost);
  } else {
    totalCost -= activityNo;
  }
  total.innerHTML = `$ ${totalCost}`;
});

// Hide bitcoin and paypal by default

bitCoin.hidden = true;
payPal.hidden = true;

// Hides one payment method when one is selected

paymentMethod.addEventListener("change", (e) => {
  const selectedPay = e.target.value;
  if (selectedPay === "bitcoin") {
    bitCoin.hidden = false;
    payPal.hidden = true;
    creditCard.hidden = true;
  } else if (selectedPay === "paypal") {
    payPal.hidden = false;
    bitCoin.hidden = true;
    creditCard.hidden = true;
  } else if (selectedPay === "credit-card") {
    creditCard.hidden = false;
    bitCoin.hidden = true;
    payPal.hidden = true;
  }
});

// Accessability

for (i = 0; i < activityInputs.length; i++) {
  activityInputs[i].addEventListener("focus", (event) => {
    event.target.parentNode.className = "focus";
  });
  activityInputs[i].addEventListener("blur", (event) => {
    event.target.parentNode.className = "blur";
  });
}

form.addEventListener("submit", (e) => {
  // Prevents default page refreshing
 

  // Name Validator

  const nameTest = nameValid.value;
  const nameFinal = /[a-z]/i.test(nameTest);
  if (nameFinal) {
    nameValid.parentNode.classList.add("valid");
    nameValid.parentNode.classList.remove("not-valid");
    nameValid.parentElement.lastElementChild.style.display = "none"
  } else {
    nameValid.parentNode.classList.add("not-valid");
   nameValid.parentElement.lastElementChild.style.display = "block"
    e.preventDefault();
  }

  // Email Validator

  
  const emailTest = emailValid.value;
  const emailFinal = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailTest);
  if (emailFinal) {
    emailValid.parentNode.classList.add("valid");
    emailValid.parentNode.classList.remove("not-valid");
    emailValid.parentElement.lastElementChild.style.display = "none"
  } else {
    emailValid.parentNode.classList.add("not-valid");
    emailValid.parentElement.lastElementChild.style.display = "block"
    e.preventDefault();
  }

  // activities Validator

  if (totalCost === 0) {
    cost.parentElement.classList.add("not-valid");
    activitiesHint.style.display = "block"
    e.preventDefault();
  } else {
    cost.parentElement.classList.add("valid");
    cost.parentNode.classList.remove("not-valid");
    activitiesHint.style.display = "none"
  }

  // Card Validator
  
if(paymentMethod.value === 'credit-card'){
  const cardTest = cardValid.value;
  const cardFinal = /\d{13,16}/.test(cardTest);
  if (cardFinal) {
    cardValid.parentNode.classList.add("valid");
    cardValid.parentNode.classList.remove("not-valid");
    cardValid.parentElement.lastElementChild.style.display = "none"
  } else {
    cardValid.parentNode.classList.add("not-valid");
    cardValid.parentElement.lastElementChild.style.display = "block"
    e.preventDefault();
  }

  //Zip Validator
 
  const zipTest = zipValid.value;
  const zipFinal = /\d{5}/.test(zipTest);
  if (zipFinal) {
    zipValid.parentNode.classList.add("valid");
    zipValid.parentNode.classList.remove("not-valid");
    zipValid.parentElement.lastElementChild.style.display = "none"
  } else {
    zipValid.parentNode.classList.add("not-valid");
    cvvValid.parentElement.lastElementChild.style.display = "block"
  //  for (let i = 0; i < hint.length; i++) {
  //    hint[i].parentElement.lastElementChild.style.display = "block"
  //  }
   e.preventDefault();
  }

  // CVV Validator
 
  const cvvTest = cvvValid.value;
  const cvvFinal = /\d{3}/.test(cvvTest);
  if (cvvFinal) {
    cvvValid.parentNode.classList.add("valid");
    cvvValid.parentNode.classList.remove("not-valid");
    cvvValid.parentElement.lastElementChild.style.display = "none"
  } else {
    cvvValid.parentNode.classList.add("not-valid");
    cvvValid.parentElement.lastElementChild.style.display = "block"
    e.preventDefault();
  }
}
});

