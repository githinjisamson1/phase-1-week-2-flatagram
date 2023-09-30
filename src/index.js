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

      // increase image likes on the page
      likeButton.addEventListener("click", function (e) {
        // console.log(e.target);

        count++;
        likeCount.textContent = `${count} likes`;
      });

      //   add new comment to page
      commentForm.addEventListener("submit", function (e) {
        // console.log(e.target);
        e.preventDefault();

        const li = document.createElement("li");
        li.textContent = comment.value;
        commentsList.appendChild(li);
        commentForm.reset();
      });
    });
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
