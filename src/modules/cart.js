// Cоздание ф-ии - это инкапсуляция

const cart = () => {
    console.log(document); //Показывает всю верстку в консоли
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = document.querySelector('.cart-close')

    const openCart = () => {
        cartModal.style.display = 'flex';
    };
    const closeCart = () => {
        cartModal.style.display = '';
    };
    // cartBtn.onclick = function () {
    //     openCart();
    // };
    cartBtn.addEventListener('click', openCart)
    cartCloseBtn.onclick = closeCart;
};
export default cart;