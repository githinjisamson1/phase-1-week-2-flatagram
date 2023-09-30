// write your code here

function handleDOMContentLoaded() {
  // grab elements
  const cardTitle = document.querySelector("#card-title");
  const cardImage = document.querySelector("#card-image");
  let likeCount = document.querySelector("#like-count");
  const likeButton = document.querySelector("#like-button");
  const commentsList = document.querySelector("#comments-list");
  const commentForm = document.querySelector("#comment-form");
  const comment = document.querySelector("#comment");

  //   set initial likeCount to 0
  let count = 0;

  //   fetch API - 1
  fetch("http://localhost:3000/images/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      cardTitle.textContent = data.title;
      cardImage.src = data.image;

     
    });
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
