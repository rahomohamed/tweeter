$(document).ready(function() {
  

  $("i").click(function() {
  $("#tweet-button").slideToggle()
    });

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  
const createTweetElement = function(tweetData) {
return`<article class="tweet">
<header>
  <div class ="profile-info">
    <img class="avatar" src=${tweetData.user.avatars} />
    <p class="name">${tweetData.user.name}</p>
  </div>
  <p class="username">${tweetData.user.handle}</p>
</header>
<p class="words">${escape(tweetData.content.text)}</p>
<footer>
  <div class="bottom-info">
    <p class="days-passed">10 days ago</p>
  </div>
  <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
</article>`
}


const renderTweets = function(tweets) {
  for (let tweet of tweets) {
  $("#tweets-container").append(createTweetElement(tweet));
  }
}

const loadTweets = function() {
$.ajax({
url: '/tweets',
method: "GET",
dataType: "JSON"
})
.then(response => {
renderTweets(response)
});
}
loadTweets();



$(function() {
  const $form = $('#tweet-button');
  $form.on('submit', function (event) {
   $(".error-message").slideUp();
   $(".error-message").empty();

    event.preventDefault()

    const input = $('.new-tweet textarea');
    const max = 140;
    const errors = ["", null];
    const inputLength = input.val().length

    if(errors.includes(input.val())) {
      $(".error-message").append("<div style='color:red'> Input required </div>")
      $(".error-message").slideDown();
    }
    else if (inputLength > max) {
      $(".error-message").append("<div style='color:red'> Tweet must be 140 characters </div>");
      $(".error-message").slideDown();

    } else {
   $.ajax({
    url: '/tweets',
    method: "post",
    data: $form.serialize()
  })
    .then(() => {
    loadTweets(); 
    input.val("");
    console.log('success')
  });
}
  
});

});

});

