// Model - Contains Data
function getContent(viewPage) {
  let path = "";
  if (viewPage.includes("/")) {
    path = `view/${viewPage}`;
  } else {
    path = `view/${viewPage}/${viewPage}`;
  }

  $.get(`${path}.html`, function (data) {
    $("#app").html(data);
  });
}

export default {
  getContent,
};
