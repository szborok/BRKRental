/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// toggle 
$(document).ready(function () {

  $('.search-toggle').click(function () {
    $('.search-wrapper').toggleClass('show');
  });

  $('.modal-toggle').click(function () {
    $('.modalBox').toggleClass('show');
  })

  $('.modalBox').click(function () {
    $(this).removeClass('show');
  });

  $('.spinner').click(function () {
    $(".theme-selector").toggleClass('show');
  });
  $('.light').click(function () {
    $('body').addClass('light-theme');
    $('body').removeClass('dark-theme');
  });
  $('.dark').click(function () {
    $('body').toggleClass('dark-theme');
    $('body').removeClass('light-theme');
  });
});



// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});



function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
  document.body.classList.add('modal-open'); // Disable scrolling
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.classList.remove('modal-open'); // Enable scrolling
}

function plusSlides(modalId, n) {
  showSlides(modalId, slideIndex[modalId] += n);
}

function currentSlide(modalId, n) {
  showSlides(modalId, slideIndex[modalId] = n);
}

let slideIndex = {
  myModal1: 1,
  myModal2: 1,
  myModal3: 1,
  myModal4: 1,
  myModal5: 1,
  myModal6: 1,
  myModal7: 1,
  myModal8: 1,
  myModal9: 1,
};

function showSlides(modalId, n) {
  let i;
  let modal = document.getElementById(modalId);
  let slides = modal.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex[modalId] = 1;
  }
  if (n < 1) {
    slideIndex[modalId] = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex[modalId] - 1].style.display = "flex";
}

// Initialize slides for each modal
document.addEventListener("DOMContentLoaded", function () {
  showSlides('myModal1', slideIndex['myModal1']);
  showSlides('myModal2', slideIndex['myModal2']);
  showSlides('myModal3', slideIndex['myModal3']);
  showSlides('myModal4', slideIndex['myModal4']);
});

