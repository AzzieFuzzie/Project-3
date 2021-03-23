const formName = document.getElementById('name');
const otherJobRole = document.getElementById('other-job-role');
const jobs = document.getElementById('title');
const designShirt = document.getElementById('design');
const colorShirt = document.getElementById('color');
const colorOption = document.getElementById('color').children;
const activities = document.getElementById('activities');
const total = document.getElementById('activities-cost')
const card = document.getElementById('credit-card');
const bitcoin = document.getElementById('bitcoin');
const payPal = document.getElementById('paypal');
const paymentMethod = document.getElementById('payment').children;
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

paymentMethod.addEventListener('click' ,(e) =>{
    const selectedPay = e.target.getAttribute('value');
    if(selectedPay === 'bitcoin'){
        payPal.hidden =true;
        card.hidden = true
    }
})
