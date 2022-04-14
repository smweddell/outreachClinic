// // Model - Contains Data
// var MODEL = (function () {
//   var _getContent = function(viewPage, callback) {
//     $.get(`view/${viewPage}/${viewPage}.html`, function (data) {
//       $("#app").html(data);
//     });

//     // if (callback) {
//     //   callback();
//     // }
//   };

//   var _getPartners = function(viewContent, callback) {
//     $.get(`view/partners/${viewContent}.html`, function (info) {
//       $("#app").html(info);
//     });

//     // if (callback) {
//     //   callback();
//     // }
//   };

//   return {
//     getContent: _getContent,
//     getPartners: _getPartners
//   };
// })();

export function getContent(viewPage) {
  $.get(`view/${viewPage}/${viewPage}.html`, function (data) {
    $("#app").html(data);
  });
}

export async function getPartners(viewContent) {
  let partnerContent = await $.get(`view/partners/${viewContent}.html`);

  $("#app").html(partnerContent);

}

export default {
  getContent,
  getPartners,
};
