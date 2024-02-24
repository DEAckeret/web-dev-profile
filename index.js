
// $(document).ready(function() {
//     $('.dark-mode-toggle').click(function() {

//         if ($('.dark-mode-toggle').hasClass('dark')) {
//             $('.dark-mode-toggle').removeClass('dark');
//         } else {
//             $('.dark-mode-toggle').addClass('dark');
//         }
        
//         if ($('.dark-mode-toggle').hasClass('dark')) {
//             $('body').find('.light').addClass('dark');
//             $('body').addClass('dark');

//             $('.hero-pose img').attr('src', 'assets/images/Night-mode-dusty.png');

//         } else { 
//             $('body').find('.light').removeClass('dark');
//             $('body').removeClass('dark');

//             $('.hero-pose img').attr('src', 'assets/images/Day-mode-dusty.png');
            
//         }

//     });
// });


$(document).ready(function() {
  // Check if dark mode was previously selected
  if (localStorage.getItem('darkMode') === 'true') {
      $('.dark-mode-toggle').addClass('dark');
      $('body').find('.light').addClass('dark');
      $('body').addClass('dark');
      $('.hero-pose img').attr('src', './assets/images/Night-mode-dusty.png');
  }

  $('.dark-mode-toggle').click(function() {
      if ($('.dark-mode-toggle').hasClass('dark')) {
          $('.dark-mode-toggle').removeClass('dark');
          $('body').find('.light').removeClass('dark');
          $('body').removeClass('dark');
          $('.hero-pose img').attr('src', './assets/images/Day-mode-dusty.png');
          localStorage.setItem('darkMode', 'false');
      } else {
          $('.dark-mode-toggle').addClass('dark');
          $('body').find('.light').addClass('dark');
          $('body').addClass('dark');
          $('.hero-pose img').attr('src', './assets/images/Night-mode-dusty.png');
          localStorage.setItem('darkMode', 'true');
      }
  });
});



// indicates styles the active link in the navbar
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



// <------------------ ABOUT ME ------------------>

$(document).ready(function(){
  setTimeout(function(){
    $('#about').addClass('animate-about');
    // $('#me').addClass('animate-me');
    $('#me').addClass('animate-me');
  }, 1500);

  setTimeout(function(){
  $('#dusty').addClass('animate-dusty-reveal');
  }, 3700);
})