// _____________________________make the mobile navbar______________________
let navOpen = document.querySelector(".navOpen"); // navOpen icon
let navclose = document.querySelector(".closeNav"); // navClose icon
let mobNavParent = document.querySelector("#mobNavCont"); // mobNav parent div
let mobNav = document.querySelector("#mobNav"); // mobNav

// declaring functions
let openNav = () => {

    //Using jQuery only for animation

    // mobNavParent
    $(mobNavParent).animate({
        "right": 0
    }, 400, function () {

        $(mobNav).animate({
            "right": 0
        }, 300);
    });
};

let closeNav = () => {

    $(mobNav).animate({
        "right": "-100%"
    }, 300, function () {

        $(mobNavParent).animate({
            "right": "-100%"
        }, 300)
    });
};

let shadowCloseNav = (element) => {
    // this function will close the mob nav but when the use click on the body

    if (element == mobNavParent) {

        closeNav()
    }
};

let toggleNav = () => {

    if ($(window).scrollTop()) // check if the user has scrolled from top(what actually happens that the browser checks if the window scrolltop value has increased)
    {
        $(".navbar").addClass("toggleNav");
    } else {
        $(".navbar").removeClass("toggleNav");
    }
};

function currentItem() { // this function isn`t an arrow function because i want to use (this) 
    $(this).children().css("color", "#f24548") // change the clicked element color
    $(this).siblings().children().css("color", "#404040") // reset all the siblings elements color
};


// calling functions
navOpen.addEventListener("click", openNav); // open the nav with the bar icon
navclose.addEventListener("click", closeNav) // close the nav with the X icon
mobNavParent.addEventListener("click", (e) => {

    shadowCloseNav(e.target);

}); // close the nav with the body


// close the nav if the user resized the screen to prevent any bug just for precautions

// window.addEventListener("resize", closeNav) // hide this temp..

$(window).scroll(toggleNav) // when scroll excute the toggleNav function

$(".mobItem").click(currentItem);

// _______________________________animate to each section___________________

$(".navbar ul li a").click(function(){
    
    let elementAttribute = $(this).attr("href");

    let sectionOffset = $(`${elementAttribute}`).offset().top;

    $("body,html").animate({scrollTop: sectionOffset -120}, 1000)
})

// ______________________animate to each section from the mob nav___________________

$(".mobItem").click(function(){
    let elementAttribute = $(this).children().attr("href");

    let sectionOffset = $(`${elementAttribute}`).offset().top;

    $("body,html").animate({scrollTop: sectionOffset -120}, 1000)

})


// ______________________________Go Up_______________________


// show the go up icon at certain offset

$(window).scroll(function(){
// show the to top icon when the user scroll to the features section offset -500 which is a good distance to show the icon
    if($(window).scrollTop() > $("#features").offset().top) {
        $("#goUp").fadeIn(400);
    }
    else{
        $("#goUp").fadeOut(400);
    }
});



// go to top on click on the icon

$("#goUp").click(function(){

    $("html,body").animate({scrollTop: 0}, 1000)
});


// __________________________loading page___________________________________
$(document).ready(function(){

    $("#loading").fadeOut(1200, function(){
        $("body,html").css("overflow", "auto");
        $("body,html").css("oveflowX", "hidden")
    });
});
// ______________________________________Slick sliders________________________________

// make slider goToIndex function to call it many times with out repeating code
let goToIndex = (targetClass, sliderClass, index) => {

    $(targetClass).click(function (){

        $(sliderClass).slick("slickGoTo", index);
    });

};


// slick slider 1
$(document).ready(function () {
    $('.sliding1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
  

    });
});




// slide to specific index in the first slider
goToIndex(".ball-one", ".sliding1", 0);
goToIndex(".ball-two", ".sliding1", 1);
goToIndex(".ball-three", ".sliding1", 2);

// slick slider 2
$(document).ready(function () {
    $('.sliding2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        swipe: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

// slide to specific index in the second slider
goToIndex(".blueDiv", ".sliding2", 0)
goToIndex(".purpleDiv", ".sliding2", 1)
goToIndex(".redDiv", ".sliding2", 2)


// _____________________________targetCard popper___________________________

let targetCards = document.querySelectorAll(".targetCard"); // return the two images
let cardParent = document.querySelector(".cardParent"); // popper parent div
let cardChild = document.querySelector(".cardChild"); // the popper div

// declaring functions

let openPopper = (event) => {

    cardParent.style.display = "flex"; // open the parent popper div

    let clickedImgSource = event.target.src

    $(cardChild).show(500); // show the image with animation

    cardChild.style.backgroundImage = `url("${clickedImgSource}")` // pass the images src(which the target src) to the popper background image

    $(`body`).css("overflow", "hidden") // prevent scrolling
};

let closePopper = (event) => {

    if (event.target == cardParent) {
        $(cardChild).hide(500, function () {

            cardParent.style.display = "none"; // close the parent popper div

            $(`body`).css("overflow", "auto") // return the scroll

        }) // just want to close the parent div after the popper is hidden with the animation


    }
};

// calling functions
targetCards.forEach(card => { // loop through each image and add event to it

    card.addEventListener("click", (e) => {

        openPopper(e)
    });
});

// close the popper when click outside the image
cardParent.addEventListener("click", (e) => {

    closePopper(e)
});

// ______________________lax.js(animate on scroll library)_______________

window.onload = function () {
    lax.setup({
        breakpoints: {
            small: 0,
            large: 992
        }
    })
    // init
    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
};

window.addEventListener("resize", function () {
    lax.updateElements()
});


// ____________________Testimonials slick slider ________________


$(document).ready(function () {
    $('.testimonials-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        swipe: false,
        arrows: true,
        prevArrow: $('.previous'),
        nextArrow: $('.next'),
    });
});


// slide to specific index in the testimonials slider
goToIndex(".person1", ".testimonials-slider", 0)
goToIndex(".person2", ".testimonials-slider", 1)
goToIndex(".person3", ".testimonials-slider", 2)
goToIndex(".person4", ".testimonials-slider", 3)
goToIndex(".person5", ".testimonials-slider", 4)
goToIndex(".person6", ".testimonials-slider", 5)
goToIndex(".person7", ".testimonials-slider", 6)


// ______________________________screen shots slick slider__________________

$('.screenShots-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',

    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: false,
    arrows: true,
    prevArrow: $('.scPrevious'),
    nextArrow: $('.scNext'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    
  });
  

//   _____________team section slick slider__________
$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 2000,
    swipe: true,
    arrows: true,
    prevArrow: $('.p'),
    nextArrow: $('.n'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1
          }
        }
      ]
  });
