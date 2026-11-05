// Contact form demo

document
.getElementById('contactForm')
.addEventListener('submit', function(e){

    e.preventDefault();

    alert(
        'Thank you for contacting NewCrown Partners LLC. We will reach out shortly.'
    );

});
