const formName = document.getElementById('name');
const otherJobRole = document.getElementById('other-job-role');
const jobs = document.getElementById('title');
const designShirt = document.getElementById('design');
const colorShirt = document.getElementById('color');
const colorOption = document.getElementById('color').children;
const activities = document.getElementById('activities');
const total = document.getElementById('activities-cost')
const creditCard = document.querySelector('.credit-card');
const payPal = document.querySelector('.paypal');
const bitCoin = document.querySelector('.bitcoin');
const paymentMethod = document.getElementById('payment');
const form = document.querySelector('form');
let activitiesInputs = document.querySelectorAll("input[type=checkbox]");
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
// disables shirt colors
colorShirt.disabled = true;


// designShirt.addEventListener('click' , (e) =>{

// if(e.target.value === 'js puns'){
//     colorShirt.disabled = false;

//  for(i = 0 ; i>colorShirt.children.length ; i++ ){
//     const target 
    
//  }
// }
// else if(e.target.value === 'heart js'){
//     colorShirt.disabled = false;
// }
// });

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

// Form Validation
// form.addEventListener('submit',(e) =>{
//   const nameValue = nameForm.getElementsByTagName("INPUT")[0].value;
//    const nameIsValid = /^.+$/.test(nameValue);    
//  return nameIsValid;
      
// })
form.addEventListener("submit", (e) => {
    // name field validation
    formName = e.target.value;
    return /[a-z]/.test(formName);
    e.preventDefault();

})

// Accessability

  for(let i =0 ; i< activitiesInputs.length ; i++ ){
 
  activitiesInputs.addEventListener('focus',(e)=>{
  let parent = activitiesInputs[i].parentNode;
  parent.activitiesInputs[i].classList.add('focus');
  });

  activitiesInputs.addEventListener('blur',(e)=>{
    activitiesInputs[i] =activitiesInputs[i].parentNode ;
    activitiesInputs[i].parentNode.classList.add('focus')
 
  });
}

