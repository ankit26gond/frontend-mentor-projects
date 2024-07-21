const form = document.querySelector('.calculator');

const mortgageAmount = form.querySelector('#mortgage-amount');

const allAlert = document.querySelectorAll('.alert');

let amountAlert = document.querySelector('.amount'),
    termAlert = document.querySelector('.term'),
    rateAlert = document.querySelector('.rate'),
    typeAlert = document.querySelector('.m-type');


form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const amount = mortgageAmount.value,
            term = form.querySelector("#mortgage-term").value * 12,
            rate = form.querySelector("#interest-rate").value / (12 * 100),
            type = form.querySelector("input[type=radio]:checked");

  allAlert.forEach(alerts => {
    if (alerts.classList.contains('active')) {
      alerts.classList.remove('active');
    }
  });

  
        
  if (amount == "" || term == "" || rate == "" || type == null) {

    if (amount == '') {
      amountAlert.classList.add('active');
      amountAlert.previousElementSibling.firstElementChild.classList.add('warning');
      
    }
    
    if (term == '') {
      termAlert.classList.add('active');
      termAlert.previousElementSibling.lastElementChild.classList.add('warning');
  
    }
    
    if (rate == '') {
      rateAlert.classList.add('active');
      rateAlert.previousElementSibling.lastElementChild.classList.add('warning');
      
    }
    
    if (type == null) {
      typeAlert.classList.add('active');
  
    } 

  } else {
    let EMI = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);

    let totalAmount = Number (term) * (EMI);
    totalAmount = Number (totalAmount.toFixed(2));

    let emiFormatted = Number (EMI.toFixed(2));

    let totalInterest = Number ((totalAmount - amount).toFixed(2));

    function writeChanges() {

      const interestDisplay = fullResult.querySelector(".interest-display");
      const amountDisplay = fullResult.querySelector(".amount-display");

      if (type.value == "repayment") {

        fullResult.firstElementChild.innerHTML = "Your monthly repayments";
        interestDisplay.innerHTML = `&pound;${emiFormatted.toLocaleString('en-US')}`;
        
      } else if (type.value == "interest-only") {
        
        fullResult.firstElementChild.innerHTML = "Your total interest";
        interestDisplay.innerHTML = `&pound;${totalInterest.toLocaleString('en-US')}`;
        
      }

      amountDisplay.innerHTML = `&pound;${totalAmount.toLocaleString('en-US')}`;

    }
    
    
    const result = document.querySelector(".results-summary");
    const fullResult = result.querySelector(".full-result");

    if (result.firstElementChild.tagName == "IMG") {

      result.firstElementChild.remove();

      result.style.alignItems = "flex-start";
      result.style.justifyContent = "flex-start";

      let resultDetails = result.querySelector(".results-details");
      resultDetails.textContent = `Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayements" again.`;
      resultDetails.style.textAlign = "start";
      
      writeChanges();
      fullResult.classList.add("show");

    } else {
      writeChanges();
    }
    
  }
  
  allAlert.forEach(paragraph => {
    if (paragraph.classList.contains('active')) {
      setTimeout(() => {
        paragraph.classList.remove('active');
      }, 6000)
    }
  });
  
});
