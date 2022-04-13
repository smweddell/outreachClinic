// Model - Contains Data
var MODEL = (function () {
  var _getContent = function (viewPage) {
    $.get(`view/${viewPage}/${viewPage}.html`, function (data) {
      $("#app").html(data);
    });
  };

  return {
    getContent: _getContent,
  };
})();
