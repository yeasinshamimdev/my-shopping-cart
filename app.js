function updateCaseNumber(isIncise){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if(isIncise){
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseInput.value = parseInt(caseNumber) - 1;
    }
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseInput.value * 59;
}
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})