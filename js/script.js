$(document).ready(function () {
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });
    

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos>175 || pos==175){
            $('.navbar').addClass('cng-navbar');
        } else{
            $('.navbar').removeClass('cng-navbar');
        }
    });


    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fa fa-plus"){
                $(this).children('span').html('<i class = "fa fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fa fa-plus"></i>');
            }
        });
    });



    
});