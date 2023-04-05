$( '.product-carousel' ).owlCarousel( {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
} )



var navbar = document.querySelector( 'nav' )

window.onscroll = function () {

    // pageYOffset or scrollY
    if ( window.pageYOffset > 0 )
    {
        navbar.classList.add( 'scrolled' )
    } else
    {
        navbar.classList.remove( 'scrolled' )
    }
}