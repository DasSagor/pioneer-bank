const loginBtn = document.getElementById('btn')
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-page')
    loginArea.style.display='none'
    const transactionArea = document.getElementById('transaction-page')
    transactionArea.style.display='block'
})

const depositBtn= document.getElementById('addDeposit')
depositBtn.addEventListener('click',function(){
    const depositNumber = getInputNumber('depositAmount')
    
    updateSpanText('currentDeposit',depositNumber)

    updateSpanText('currentBalance',depositNumber)

    document.getElementById('depositAmount').value = ""
})

const withdrawBtn = document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click',function(){
    const withdrawNumber = getInputNumber('withdrawAmount')

    updateSpanText('currentWithdraw',withdrawNumber)
    updateSpanText('currentBalance',-1*withdrawNumber)


    document.getElementById('withdrawAmount').value=""


})

function getInputNumber(id){
    const Amount = document.getElementById(id).value
    const amountNumber = parseFloat(Amount)
    return amountNumber 
}


function updateSpanText(id,addedNumber){
    const current = document.getElementById(id).innerText
    const currentNumber = parseFloat(current)
    const totalAmount = addedNumber + currentNumber
    document.getElementById(id).innerText = totalAmount
}