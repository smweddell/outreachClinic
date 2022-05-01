import MODEL from "../model/model.js";
import monthlyNews from "../json/newsletters.js";

// Controller - Gets data based on Listener
function initlisteners() {
  $(window).on("hashchange", function () {
    let link = window.location.hash;

    link = link.replace("#", "");
    console.log(link);

    MODEL.getContent(link);

    // if (link == "archive/archive") {
    //   $.get(monthlyNews, function (data) {
    //     // monthlyLetters(data);
    //     console.log(data);
    //   });
    // }
  });
}

// create a for each loop for newsletters
// function monthlyLetters() {
//   console.log(monthlyNews);

//   $.each(monthlyNews, function (idx, letters) {
//     $(".archive").append(`
//     <h2 class="newsletter-year">${letters.year}</h2>
//     `);
//   });

//   $.each(monthlyNews.year, function (idx, data) {
//     $(".archive .allData").append(`
//      <li>${data.month} <a href="${data.link}">${data.month} Newsletter</a></li>
//      `);
//   });
// }

function initPage() {
  $.get("view/nav.html", function (nav) {
    $("#nav").html(nav);
    initlisteners();
  });

  $.get("view/home/home.html", function (data) {
    $("#app").html(data);
  });

  $.get("view/footer.html", function (data) {
    $("#footer").html(data);
  });
}

// create FAQ Accordion for the About Page

$(document).ready(function () {
  initPage();
});
