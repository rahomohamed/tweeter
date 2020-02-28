$(document).ready(function() {
  
// toggles tweet button through navigation 
  $("i").click(function() {
  $("#tweet-button").slideToggle();
  $("textarea").focus();
    });

// escape untrusted text
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

// create tweet 
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

// renders tweets 
const renderTweets = function(tweets) {
  $("#tweets-container").empty();
  for (let tweet of tweets) {
  $("#tweets-container").prepend(createTweetElement(tweet));
  }
}
// loads tweets from /tweets
const loadTweets = function() {
$.ajax({
url: '/tweets',
method: "GET",
dataType: "JSON"
})
.then(response => {
renderTweets(response);
});
}
loadTweets();


// if any errors exist on form do not load page, if they don't exist page loads
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
  
  // once tweets is submitted counter is reset back to normal and form is empty again
    .then(() => {
    loadTweets(); 
    input.val("");
    $(".counter").empty();
    $(".counter").append("140");

  });
}
  
});

});

});

