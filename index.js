
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


$(document).ready(function() {

    var url = window.location.href;
  
    $('.nav-link').each(function() {
      if (url.includes($(this).attr('href'))) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });



// trying something out
// $(document).ready(function() {
//     $('.contact-me').click(function() {
//         $("body").find(".old").removeClass("old").addClass("new");
//     });
// });


function changeHeaderText() {
  var headerName = $('.header-name').eq(0);

  if (window.matchMedia('(max-width: 1200px)').matches) {
    headerName.text('D. A.');
  } else {
    headerName.text('D. E. Ackeret\'s');
  }
}

// Call the function once when the page loads
$(document).ready(changeHeaderText);

// Call the function again whenever the window is resized
$(window).resize(changeHeaderText);