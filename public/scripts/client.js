

$(document).ready(function() {
const createTweetElement = function(tweetData) {
return`<article class="tweet">
<header>
  <div class ="profile-info">
    <img class="avatar" src=${tweetData.user.avatars} />
    <p class="name">${tweetData.user.name}</p>
  </div>
  <p class="username">${tweetData.user.handle}</p>
</header>
<p class="words">${tweetData.content.text}</p>
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

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
  $("#tweets-container").append(createTweetElement(tweet));
  }
}

renderTweets(data);


});