$(document).ready(()=>{
  let menuCollapsed = true;
  function setWorkSectionHeight() {
    let screenSize = $(window).width();
    let elHeight = $('.works-tile').height();
    let sectionHeight = 827;
    if (screenSize >= 1200) {
      sectionHeight = 227 + elHeight * 3;
    } else if (screenSize >= 576) {
      sectionHeight = 227 + elHeight * 5;
    } else {
      sectionHeight = 227 + elHeight * 15;
    }
   
    $('#works').css('height', sectionHeight + 'px');
  }

  setWorkSectionHeight();

  $(window).resize(() => {
    setWorkSectionHeight();
  })
  if ($(window).scrollTop() > 600) {
    console.log("hi")
    $("#navigation").removeClass("bg-transparent");
    $("#navigation").addClass("bg-dark");
  }
  $(window).scroll( () => {
    if ($(window).scrollTop() > 600) {
      $("#navigation").removeClass("bg-transparent");
      $("#navigation").addClass("bg-dark");
    } else {
      if (menuCollapsed) $("#navigation").addClass("bg-transparent");
    }
  })
  $("#toggle-button-nav").on('click', () => {
    if (menuCollapsed) {
      $("#navigation").removeClass("bg-transparent");
      $("#navigation").addClass("bg-dark");
      menuCollapsed = false;
    } else {
      if ($(window).scrollTop() < 600) {
        $("#navigation").addClass("bg-transparent");
      }
      menuCollapsed = true;
      
    }
  })
})
$('.owl-one').owlCarousel({
  autoplay: true,
  autoWidth: true,
  rewind: true,
  items: 4,
  nav: false,
  dots: false,
  responsiveClass: true,
  responsive: {
    0:{
      items: 1,
    },
    768:{
      items: 2,
    },
    992:{
      items: 3,
    },
  1200:{
    items: 4,
  }
  }
})
$('.owl-two').owlCarousel({
  autoplay: true,
  items: 2,
  nav: false,
  dots: false,
  rewind: true,
  autoWidth: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0:{
      items: 1,
    },
    768:{
      items: 2,
    },
    992:{
      items: 3,
    },
  1200:{
    items: 4,
  }
  }
})
$('.owl-three').owlCarousel({
  autoplay: true,
  items: 2,
  nav: false,
  dots: false,
  autoWidth:true,
  rewind:true,
  margin: 45,
  responsiveClass: true,
  responsive: {
    0:{
      items: 1,
    },
    768:{
      items: 4,
    },
    992:{
      items: 4,
    },
  1200:{
    items: 5,
  }
  }
})
function initMap() {
  let map, options, marker;
  options = {
    zoom: 8,
    center: {lat: 38.9072, lng: -77.0369}
  }
  map = new google.maps.Map(document.getElementById('map'), options);
  marker = new google.maps.Marker({
    position: {lat: 38.9072, lng: -77.0369},
    map: map,
    icon:'./Resources/img/map-marker.png'
  })
}