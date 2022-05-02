import MODEL from "../model/model.js";

// Controller - Gets data based on Listener
function initlisteners() {
  $(window).on("hashchange", function () {
    let link = window.location.hash;

    link = link.replace("#", "");
    console.log(link);

    MODEL.getContent(link);

    if (link == "archive/archive") {
      monthlyLetters();
    }
  });
}

// A for each loop for newsletters
function monthlyLetters() {
  $.getJSON("../data/newsletters.json", function (data) {
    console.log(data);

    $.each(data.year, function (idx, letters) {
      $(".archive").append(`
  <h2 class="newsletter-year">${letters}</h2>
  `);

      console.log(letters);
    });

    $.each(data.year.newsletters, function (idx, news) {
      $(".archive .allData").append(`
   <li>${news.month} <a href="${news.link}">${news.month} Newsletter</a></li>
   `);
    });
  });
}

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

// FAQ Accordion is in the About.html at the bottom of the page in a script tag

$(document).ready(function () {
  initPage();
});
