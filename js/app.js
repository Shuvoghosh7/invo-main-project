document.getElementById('detail-submit-btn').addEventListener('click',function(){
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText=buyerDetails.value;
    buyerDetails.value='';   
});
document.getElementById('add-details-btn').addEventListener('click',function(){
    const itemsName = document.getElementById('item-name-input')
    const price = document.getElementById('item-price-input')
    const Quantity = document.getElementById('item-quantity-input')
    const infoTable = document.getElementById('info-table');

const totalPrice = parseInt(price.value) * parseInt(Quantity.value);
const tr = document.createElement('tr');
const th = document.createElement('th');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.classList.add("items-total")
th.innerText = itemsName.value;
td1.innerText = price.value;
td2.innerText = Quantity.value;
td3.innerHTML = totalPrice;
tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
infoTable.appendChild(tr);
calculatTotal();
/* //another system for create table and input value dynamic
const tr = document.createElement('tr')
tr.innerHTML =`<th >${itemsName.value}</th>
<td>${price.value}</td>
<td>${Quantity.value}</td>
<td>${totalPrice}</td>`
infoTable.appendChild(tr); 
//another system for create table end
*/
itemsName.value = '';
price.value = '';
Quantity.value = '';
});

function calculatTotal(){
    const subTotal = calculateSubTotal();
    const subTotalDisplay = document.getElementById('sub-total');
    subTotalDisplay.innerText = subTotal;
    const text= subTotal * 0.2;
   document.getElementById('tax').innerText = text.toFixed(2);
   document.getElementById('grand-total').innerText =subTotal + text;
   document.getElementById('grand-total-2').innerText =subTotal + text;
}

function  calculateSubTotal (){
    let subTotal = 0;
    const cost = document.getElementsByClassName("items-total");
    for(const total of cost){
        const price = parseInt(total.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
  
}