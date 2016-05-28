"use strict";

function get_quote(url) {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      format: "jsonp",
      method: "getQuote",
      lang: "en"
    },
    success: update
  });
}
function update(data) {
  $("#author").text(data.quoteAuthor);
  $("#content").text(data.quoteText);
}
$("document").ready(function () {
  get_quote();
  $("#update").click(function () {
    return get_quote();
  });
});