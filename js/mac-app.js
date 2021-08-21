// handle Memory cost
function getMemoryCost(button){
    const memoryCost = document.getElementById('get-memory');
    if(button == '8gb-memory-btn'){
        memoryCost.innerText = 0;
    }
    else if(button == '16gb-memory-btn'){
        memoryCost.innerText = 180;
    }   
};

// getStorage cost
function getStorageCost(button){
    const storageCost = document.getElementById('get-storage');
    if(button == '256gb-ssd'){
        storageCost.innerText = 0;
    }
    else if(button == '512gb-ssd'){
        storageCost.innerText = 100;
    }
    else if(button == '1tb-ssd'){
        storageCost.innerText = 180;
    }
};

// handleDeliverycost
function getDeliveryCost(button){
    const DeliveryCost = document.getElementById('get-delivery-cost');
    if(button == "1st-deli-btn"){
        DeliveryCost.innerText = 0;
    }
    else if(button == "2nd-deli-btn"){
        DeliveryCost.innerText = 20;
    }   
};

// get calculate
function getCalculate(){
    const memoryCost = parseInt(document.getElementById('get-memory').innerText);
    const storageCost = parseInt(document.getElementById('get-storage').innerText);
    const deliveryCost = parseInt(document.getElementById('get-delivery-cost').innerText);

    
    const totalCost = memoryCost + storageCost+ deliveryCost + 1299;

    const totalField  = document.getElementById('total-price');
    totalField.innerText = totalCost;

    const Total  = document.getElementById('promo-total');
    Total.innerText = totalCost;
}

// promocode 
document.getElementById('promo-btn').addEventListener('click',function(){
    const promoField = document.getElementById('promo-input');
    const promoCode = promoField.value;
    if(promoCode == 'stevekaku'){
        const promoTotalField = document.getElementById('promo-total');
        const promoTotal = parseInt(promoTotalField.innerText);

        const newpromoTotal = promoTotal - (promoTotal / 20);
        promoTotalField.innerText = newpromoTotal;
    }
    else{
        promoField.value = '';
    }
})



// handle memory 
document.getElementById('8gb-memory-btn').addEventListener('click',function(){
    getMemoryCost('8gb-memory-btn');
    getCalculate()
});
document.getElementById('16gb-memory-btn').addEventListener('click',function(){
    getMemoryCost('16gb-memory-btn');    
    getCalculate()});



// handle storage
document.getElementById('256gb-ssd').addEventListener('click',function(){
    getStorageCost('256gb-ssd');
    getCalculate()});
document.getElementById('512gb-ssd').addEventListener('click',function(){
    getStorageCost('512gb-ssd');  
    getCalculate()});
document.getElementById('1tb-ssd').addEventListener('click',function(){
    getStorageCost('1tb-ssd');
    getCalculate()});


// handle delivery cost
document.getElementById('1st-deli-btn').addEventListener('click',function(){
    getDeliveryCost("1st-deli-btn")
    getCalculate()});
document.getElementById('2nd-deli-btn').addEventListener('click',function(){
    getDeliveryCost("2nd-deli-btn")
    getCalculate()});

