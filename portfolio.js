$(document).ready(function() {
    const phrases = ["Web Developer", "Web Designer", "Freelancer"];
    const $el = $(".highlight");
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;

    function type() {
        const text = phrases[currentPhrase];

        if (isDeleting) {
            currentChar--;
        } else {
            currentChar++;
        }

        $el.text(text.substring(0, currentChar));
        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && currentChar === text.length) {
            speed = 1500;
            isDeleting = true;
        }

        else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    type();
});

$("#menu").css("display", "none");



$('#menu-bar').on('click',function (){
    $('#menu').toggle();
})



