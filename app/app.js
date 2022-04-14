// FAQ Accordion for the About Us Page
// function accordion() {
//   $(".accordion div").click(function (e) {
//     e.preventDefault();

//     var id = this.id;
//     console.log(id);

//     $(".accordion-content").each(function () {
//       if ($("#" + id).next()[0].id != this.id) {
//         $(this).slideUp();
//       }
//     });

//     $(this).next().toggle();
//   });
// }

import * as MODEL from '../model/model.js'

// function pageID() {
//   let btnID = this.id;
//   let hashName = location.hash;
//   let pageName = hashName.replace('#', btnID)
//   model.getContent(btnID);
//   console.log(btnID);
// } 

// Controller - Gets data based on Listener
function initlisteners() {
  $("nav a").click(function (e) {
    let btnID = this.id;
    MODEL.getContent(btnID);
    console.log(btnID);
  });
}

function partnerListeners() {
  // $(".odd a").click(function (e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   let btn = $(this).attr('href');;
  //   MODEL.getPartners(btn);
  //   console.log(btn);
  //   // callback(btn);
  // });

  $("#iuMed").on('click', function() {
    console.log("IU Med Page");
  })
}

function initPage() {
  $.get("view/nav.html", function (nav) {
    $("#nav").html(nav);
    initlisteners();
  });

  $.get("view/home/home.html", function (data) {
    $("#app").html(data);
  // partnerListeners();

  });

  // $.get("view/partners/iuMed.html", function (data) {
  //   $("#app").html(data);
  //   partnerListeners();
  // });

  $.get("view/footer.html", function (data) {
    $("#footer").html(data);
  });
}

$(document).ready(function () {
  initPage();
  // accordion();
});
