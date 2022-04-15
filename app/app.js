import MODEL from "../model/model.js";
import newsletters from "../json/newsletters.js";

// Controller - Gets data based on Listener
function initlisteners() {
  $(window).on("hashchange", function () {
    let link = window.location.hash;

    link = link.replace("#", "");
    console.log(link);

    MODEL.getContent(link);
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

// create a for each loop for newsletters

// FAQ Accordion for the About Page

$(document).ready(function () {
  initPage();
});
