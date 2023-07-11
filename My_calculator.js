console.log('My calculator');

const loanAmount = document.getElementById('loan-amount');
const term = document.getElementById('loan-years');
const rate = document.getElementById('loan-rate');
const calculateBtn = document.getElementById('calc-submit');
const resultBox = document.getElementById('monthly-payment')


function calculatePayment(){
    const numerator = loanAmount.value * ((rate.value/100)/12);
    const denominator = 1 - (1 + (rate.value/100)/12) ** (-12 * term.value);
    const monthlyPayment = (numerator / denominator).toFixed(2);
    const totalCost = (monthlyPayment * 12 * term.value).toFixed(2);
    resultBox.innerText = `Your monthly payment is $${monthlyPayment}, for a total of $${totalCost} over a period of ${term.value} years.`;
    return (numerator / denominator).toFixed(2);
};

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    calculatePayment();
});