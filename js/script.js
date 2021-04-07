const formName = document.getElementById('name');
const otherJobRole = document.getElementById('other-job-role');
const jobs = document.getElementById('title');
const designShirt = document.getElementById('design');
const colorOption = document.getElementById('color');
const activities = document.getElementById('activities');
const total = document.getElementById('activities-cost')
const creditCard = document.querySelector('.credit-card');
const payPal = document.querySelector('.paypal');
const bitCoin = document.querySelector('.bitcoin');
const paymentMethod = document.getElementById('payment');
const form = document.querySelector('form');
const activityInputs = document.querySelectorAll("input[type=checkbox]");
const nameValid = document.querySelector('input[type=text]');
const emailValid = document.querySelector('input[type=email]');
const cardValid = document.getElementById('cc-num');
const zipValid = document.getElementById('zip-hint');
const cvvValid = document.getElementById('cvv');
const label = document.querySelectorAll('label');
const cost = document.querySelector('input[data-cost]');
const input = document.querySelectorAll('input')

// Focuses on name upon refresh
formName.focus()

// Hides other job role upon refresh
otherJobRole.style.display = 'none';

// Hides and unhides other job role when other is clicked
jobs.addEventListener('click', (e) => {
  
if(e.target.value === 'other'){
    otherJobRole.style.display = 'block';
}
else{
    otherJobRole.style.display = 'none';
}
});

// disables shirt colors based on selection
colorOption.disabled = true;


designShirt.addEventListener('change' , (e) =>{

colorOption.disabled =false;

for (let i = 0; i < colorOption.children.length; i++) {
  
  
 console.log(colorPicked)
  if(colorPicked === 'js puns'){
       colorOption[i].style

  }else{}
}
})


// Activities

let totalCost = 0;

activities.addEventListener('change', (e) =>{
     const activitySelected = e.target.getAttribute('data-cost');
   const activityNo =  +activitySelected ;
 
  if(e.target.checked){
     totalCost += activityNo;
     console.log(totalCost)
  }
  else{
      totalCost -= activityNo;
  }
  total.innerHTML = `$ ${totalCost}`
})

// Hide bitcoin and paypal by default

bitCoin.hidden = true;
payPal.hidden = true;

// Hides one payment method when one is selected

paymentMethod.addEventListener('change' ,(e) =>{
    const selectedPay = e.target.value;
    if(selectedPay ==='bitcoin'){
        bitCoin.hidden =false;
        payPal.hidden =true;
        creditCard.hidden = true;
    }
    else if(selectedPay==='paypal'){
        payPal.hidden =false;
        bitCoin.hidden =true;
        creditCard.hidden = true;
    }
    else if(selectedPay==='credit-card'){
        creditCard.hidden = false;
        bitCoin.hidden =true;
         payPal.hidden = true;
     }

})


// Accessability

for (i = 0; i < activityInputs.length; i++) {
  activityInputs[i].addEventListener('focus', (event) => {
      event.target.parentNode.className = "focus";
    })
 activityInputs[i].addEventListener('blur', (event) => {
      event.target.parentNode.className = "blur";
 
})

}

form.addEventListener('submit',(e) =>{

  // Prevents default page refreshing
  e.preventDefault()

  // Name Validator
   e.target.nameValid;
   const nameTest = nameValid.value;
   const nameFinal = /[a-z]/i.test(nameTest);
  if(nameFinal){
  nameValid.parentNode.classList.add('valid');
  }
  else {
    nameValid.parentNode.classList.add('not-valid');
  }
  
  
  // Email Validator
  
e.target.emailValid
const emailTest = emailValid.value;
const emailFinal = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailTest);
if(emailFinal){
emailValid.parentNode.classList.add('valid');
}
else {
  emailValid.parentNode.classList.add('not-valid');
  
}
  

// activities Validator
 

let totalCost = e.target.getAttribute('data-cost');
if(totalCost > 1 ){
   cost.parentElement.classList.add('not-valid');
  }
    else {
      cost.parentElement.classList.add('valid');
      
    }
  

// Card Validator
e.target.cardValid;
const cardTest = cardValid.value;
const cardFinal =  /\d{13,16}/.test(cardTest);
if(cardFinal){
cardValid.parentNode.classList.add('valid');
}
else {
  cardValid.parentNode.classList.add('not-valid');
}

//Zip Validator
e.target.zipValid;
const zipTest = zipValid.value;
const zipFinal =  /\d{5}/.test(zipTest);
if(zipFinal){
zipValid.parentNode.classList.add('valid');
}
else {
  zipValid.parentNode.classList.add('not-valid');
}

// CVV Validator
e.target.cvvValid;
const cvvTest = cvvValid.value;
const cvvFinal =  /\d{3}/.test(cvvTest);
if(cvvFinal){
cvvValid.parentNode.classList.add('valid');
}
else {
  cvvValid.parentNode.classList.add('not-valid');
}
})





