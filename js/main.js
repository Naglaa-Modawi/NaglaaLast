$(function(){
    'use strict';
    //Start Window 
    $(window).scroll(function(){//Start Window
       
        //Scroall To Top Function
        var scrolToTop =  $('.sroal');
        if($(window).scrollTop() >= 800){
            scrolToTop.fadeIn(500);
        }
        else{
            scrolToTop.fadeOut(500);
        }
           //ServicesData Appear
        if($(window).scrollTop() >= 1000){
            $('.Services .ServicesData').slideDown(2000);
        };
    });//End Window 
//++++++++++++++++++++++++++++++++++++//

//Navbar Actions
$('.navbar li a').click(function(){
    $('html ,body').animate({ 
        scrollTop: $("#" +$(this).data('scroll')).offset().top - 50
    },1000)
    window.console.log("#" +$(this).data('scroll'));
    window.console.log( $(this).offset().top);
});
// End Navbar Actions

//Scroall To Top Function Start
    $('.sroal').click(function(){
        $("html,body").animate({scrollTop:0},600);
     });
 //Scroall To Top Function End

 //Chang Style Of Services
$(".Services .ServicesData ").hover(function(){
    $(this).animate({
        borderWidth: "3px",
        borderRadius:'5',
        opacity:"8"   
    });
}); // End Chang Style Of Services

//Chang The Tours
$('.Tours_info p').on('click',function(){
    console.log($(this).next().attr('src'));
    $('.Main_image , .Main-Tours img').hide();
    $('.Main-Tours iframe').attr('src',$(this).next().attr('src')).show();
    $('.Main-Tours iframe').attr('src',$(this).next().attr('src'))
})
$(' .Other-Tours iframe').hide();
    $('.Main-Tours button ').click(function(){
        $('.Main_image , .Main-Tours img').hide();

        $('.Main-Tours iframe').show();
    });

     //Scroall To Spacific TOurs
     $('.Tours_info .only p').click(function(){

        $('html ,body').animate({ 
            scrollTop: $("#" +$(this).data('scroll')).offset().top 
        },1000)
});

//Scroll To Price Section
$('.Header .Header-Cover button').click(function(){

    $('html ,body').animate({ 
        scrollTop: $("#" +$(this).data('scroll')).offset().top 
    },1000)
});


//Start Copy Whriter 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 5) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
























});//End Man function