$(document).on('click', '.tag-buttons', function(event) {

    // Keeps page from reloading //
    event.preventDefault();

    var type = this.innerText;
    console.log(this.innerText);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + window.encodeURI(type) + "&limit=10&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      for (var i = 0; i < response.data.length; i++) {

        $("#photo").append('<img class="gif" src="' + response.data[i].images.fixed_height_still.url + '">');
      }  
    });

    $("#photo").empty();

  });
  renderButtons();
  
  
  $('body').on('click', '.gif', function() {
      var src = $(this).attr("src");
    if($(this).hasClass('playing')){
       //stop
       $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
       $(this).removeClass('playing');
    } else {
      //play
      $(this).addClass('playing');
      $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
    }
  });