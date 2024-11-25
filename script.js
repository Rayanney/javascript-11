//adjust the content of each item through add and delete buttons
const decreaseOne = document.getElementsByClassName('total');
if (decreaseOne.length > 0) {
    decreaseOne[0].addEventListener('click', function() {
        let totalInput = document.getElementById('totalInput');
        let total = parseInt(totalInput.value, 10);
        if (total > 1) {
            totalInput.value = total - 1;
        } else {
            totalInput.value = total + 1;
        }
    });
} else {
    console.log('Element with class "total" not found');
}




// Delete items from the cart
const removeElements = document.getElementsByClassName('card-text');

Array.from(removeElements).forEach(function(element) {
    element.addEventListener('click', function() {
        element.remove();
    });
});

//like items through a clickable heart-shaped button that will change colors accordingly

const heart=document.getElementById('fas fa-heart')
heart.addEventListener(click,()=>{
    heart.classList.toggle('liked the heart')
});
