document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.burger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('header');
    
    if (burgerButton && mobileMenu && header) {
        burgerButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpening = !mobileMenu.classList.contains('active');
            
            mobileMenu.classList.toggle('active');
            burgerButton.classList.toggle('active');
            header.classList.toggle('menu-opened');
            
            if (isOpening) {
                header.style.borderRadius = '1rem 1rem 0 0';
                header.style.marginBottom = '150px';
            } else {
                header.style.borderRadius = '1rem';
                header.style.marginBottom = '';
            }
        });
        
        document.querySelectorAll('.mobile-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                closeMenu();
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.burger-button') && 
                !event.target.closest('.mobile-menu')) {
                closeMenu();
            }
        });
        
        function closeMenu() {
            mobileMenu.classList.remove('active');
            burgerButton.classList.remove('active');
            header.classList.remove('menu-opened');
            header.style.borderRadius = '2rem';
            header.style.marginBottom = '';
        }
    }
});


$(document).ready(function(){
  $('#phone').inputmask('+7 (999) 999-99-99');
})


document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const pricePerItemElement = document.getElementById('price-per-item');
    
    quantityInput.addEventListener('input', function() {
        const quantity = parseInt(this.value) || 0;
        const pricePerItem = 500;
        const totalPrice = quantity * pricePerItem;
        
        totalPriceElement.textContent = totalPrice.toLocaleString('ru-RU') + ' ₽';
        pricePerItemElement.textContent = pricePerItem.toLocaleString('ru-RU') + ' ₽ за один саженец';
    });
    
    document.getElementById('planting-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    });
});