const getFromDb = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const addToDb = id =>{
    const cart = getFromDb();
    if(id in cart){
        cart[id] = cart[id] + 1;
    }
    else{
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
const deleteFromDb = id =>{
    const cart = getFromDb();
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
}
export {addToDb, getFromDb, deleteFromDb}