
// $(document).ready(function() {
//     $('.dark-mode-toggle').click(function() {

//         if ($('.dark-mode-toggle').hasClass('dark')) {
//             $('.dark-mode-toggle').removeClass('dark');
//         } else {
//             $('.dark-mode-toggle').addClass('dark');
//         }
        
        
//         if ($('.dark-mode-toggle').hasClass('dark')) {
//             $('.moon').addClass('dark');
//             $('.sun').addClass('dark');
//             $('.header-name').addClass('dark');
//             $('body').addClass('dark');
//         } else {
//             $('.moon').removeClass('dark');
//             $('.sun').removeClass('dark');
//             $('.header-name').removeClass('dark');
//             $('body').removeClass('dark');
//         }
//     });
// });

$(document).ready(function() {
    $('.dark-mode-toggle').click(function() {

        if ($('.dark-mode-toggle').hasClass('dark')) {
            $('.dark-mode-toggle').removeClass('dark');
        } else {
            $('.dark-mode-toggle').addClass('dark');
        }
        
        if ($('.dark-mode-toggle').hasClass('dark')) {
            $('body').find('.light').addClass('dark');
            $('body').addClass('dark');

        } else { 
            $('body').find('.light').removeClass('dark');
            $('body').removeClass('dark');
            
        }

    });
});


// trying something out
// $(document).ready(function() {
//     $('.contact-me').click(function() {
//         $("body").find(".old").removeClass("old").addClass("new");
//     });
// });
