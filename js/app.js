document.getElementById('detail-submit-btn').addEventListener('click',function(){
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText=buyerDetails.value;
    buyerDetails.value='';   
});
document.getElementById('add-details-btn').addEventListener('click',function(){
    const infoTable = document.getElementById('info-table');
    const itemsName = document.getElementById('item-name-input')
    const price = document.getElementById('item-price-input')
    const Quantity = document.getElementById('item-quantity-input')

const totalPrice = parseInt(price.value) * parseInt(Quantity.value);
const tr = document.createElement('tr');
const th = document.createElement('th');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

th.innerText = itemsName.value;
td1.innerText = price.value;
td2.innerText = Quantity.value;
td3.innerHTML = totalPrice;
tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
infoTable.appendChild(tr);
itemsName.value = '';
price.value = '';
Quantity.value = '';
})