$(document).ready(() => {
    $('#open-icon').on('click', () => {
        // $('.nav-links').css('display', 'flex');
        $(".nav-links").slideDown({
            start: function () {
              $(this).css({
                display: "flex"
              })
            }
          });
        $('#open-icon').hide();
        $('#close-icon').show();
    });

    $('#close-icon').on('click', () => {
        $('.nav-links').slideUp();
        $('#open-icon').show();
        $('#close-icon').hide();
    });
});

// const openIcon = document.getElementById('open-icon');
// const closeIcon = document.getElementById('close-icon');
// const navLinks = document.querySelector('.nav-links');

// const openNavMenu = () => {
//     openIcon.style.display = 'none';
//     closeIcon.style.display = 'block';
//     navLinks.style.animation = 'menu-open 0.5s linear';
//     navLinks.style.animationFillMode = 'forwards';
//     navLinks.style.display = 'flex';
// }

// const closeNavMenu = () => {
//     openIcon.style.display = 'block';
//     closeIcon.style.display = 'none';
//     navLinks.style.display = 'none';
// }

// openIcon.addEventListener('click', openNavMenu);
// closeIcon.addEventListener('click', closeNavMenu);