const handlebtn=()=>{
    const productName=document.getElementById("product-name");
    const productQuantaty=document.getElementById("product-quantaty");
    const productText=productName.value;
    const productQText=productQuantaty.value;
    productName.value='';
    productQuantaty.value='';
    console.log(productText,productQText);
    display(productText,productQText);
    saveProductToLocalStorage(productText,productQText)
}
const display=(product,quantaty)=>{
    const display=document.getElementById("display");
    const li=document.createElement("li");
    li.innerText=`${product}  : ${quantaty}`
    display.appendChild(li);
}
const getStoredShoppingCart=()=>{
    let cart={};
    const storedCart=localStorage.getItem("cart")
    if (storedCart) {
        cart=JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage= (product,quantaty)=>{
    const cart= getStoredShoppingCart();
    cart[product]=quantaty;
    console.log(cart);
    const cartSteringify=JSON.stringify(cart);
    console.log(cartSteringify);
    localStorage.setItem('cart',cartSteringify)
}
const showData=()=>{
    const setCart=getStoredShoppingCart();
    console.log(setCart);
    for (const product in setCart){
        console.log(product);
        const quantaty=setCart[product];
        console.log(quantaty);
        display(product,quantaty)
    }
}
showData()