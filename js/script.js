$(document).ready(function(){

  function loadData() {
    var wikiElem = $('.wikipedia_links');
    var query = 'javascript';
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&format=json&callback=wikiCallback';
    $.ajax({
      url: wikiUrl,
      dataType: "jsonp",
      jsonp: "callback",
      success: function(response) {
        wikiElem.text("");
        var titles = response[1];
        var text = response[2];
        var links = response[3];

        for (var i = 0; i < titles.length; i++) {
          var url = 'https://en.wikipedia.org/wiki/' + links[i];

          wikiElem.append('<li><a href="' + url + '">' + titles[i] + '</a><p>' + text[i] + '</p></li>');
        };
      }
    });
    return false;
  };
  loadData();

});

