if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else {
    ready();
}
function ready () {
    let removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click',removeCartItem);
    }
    
    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change',quantityChange);
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click',addToCart);
    }

}

function addToCart(event) {
    let button = event.target;
    let item = button.parentElement.parentElement;
    let price = item.getElementsByClassName('shop-item-price')[0].innerText;
    let tittle = item.getElementsByClassName('item-info')[0].innerText;
    let image = item.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(tittle, price, image);
    updateCartTotal();

}

function addItemToCart (tittle, price, image) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-tittle');
    for (let i = 0; i < cartItemNames.length; i++) {
        const itemNames = cartItemNames[i];
        if(itemNames.innerText == tittle){
            alert('This product has been selected.');
            return;
        }
        
    }
    let cartRowContent = `
        <div class="cart-item-info cart-col">
            <img class="cart-item-image" src="${image}" alt="apple">
            <span class="cart-item-tittle">${tittle}</span>
        </div>
        <span class="cart-item-price cart-col">${price}</span>
        <div class="cart-item-quantity cart-col">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger">REMOVE</button>
        </div>
    `;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow); 
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChange);
}

function quantityChange(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0 || input.value%1 != 0){
        input.value = 1;
    }
    updateCartTotal();
}
function removeCartItem(event){
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal(); 
}

function updateCartTotal (){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        let price = cartRow.getElementsByClassName('cart-item-price')[0].innerText;
        let quantity = cartRow.getElementsByClassName('cart-quantity-input')[0].value;
        total += parseFloat(price.replace('$','')) * parseFloat(quantity); 
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+total;
}