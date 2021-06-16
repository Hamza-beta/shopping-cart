var btnPlus= document.querySelectorAll('.btnplus')
for (let i=0; i<btnPlus.length;i++  ){
     btnPlus[i].addEventListener('click', function(){
       btnPlus[i].nextElementSibling.innerHTML++
       updatecarttotal()
    })
 }
var btnminus= document.querySelectorAll('.btnminus')
for (let i=0; i<btnminus.length;i++ ){  
 btnminus[i].addEventListener('click', function(){
    if (btnminus[i].previousElementSibling.innerHTML>0)
    btnminus[i].previousElementSibling.innerHTML--
    updatecarttotal()
})
 }
var rmprod=document.getElementsByClassName('remove-product')
 for (let prod of rmprod){
     prod.addEventListener('click',function(){
     prod.parentElement.parentElement.remove()
     updatecarttotal()
     })
 }
var button=document.getElementsByClassName('like')
 for (let i=0 ; i<button.length; i++){
button[i].addEventListener('click',function(){
button[i].style.backgroundColor='red'})
}

function updatecarttotal(){
var subitems=document.querySelector('.totals-value')
var itemquantity=document.getElementsByClassName('counter')
var itemprice=document.getElementsByClassName('product-price')
var sum=0
for (let i=0;i<itemprice.length;i++){
sum=sum+(itemquantity[i].innerHTML*itemprice[i].innerHTML)
}
subitems.innerHTML=sum
}


