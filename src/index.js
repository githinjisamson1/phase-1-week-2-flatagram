function handleCommentFormSubmission(e) {
  e.preventDefault();
  const commentsList = document.querySelector("#comments-list");
  const commentValue = document.querySelector("#comment").value;

  //   manipulate dom
  const liComment = document.createElement("li");
  liComment.innerHTML = commentValue;
  commentsList.appendChild(liComment);

  //   clear form values after submission
  e.target.reset();
}

function handleLikeButton(e, count) {
  const likeCount = document.querySelector("#like-count");
  likeCount.innerHTML = `${count} likes`;
}

function displayInformation(data) {
  const title = document.querySelector("#card-title");
  const image = document.querySelector("#card-image");
  const likeButton = document.querySelector("#like-button");
  const commentForm = document.querySelector("#comment-form");

  //   initialize like counts to 0
  let count = 0;

  //   manipulate dom
  title.innerHTML = data.title;
  image.src = data.image;

  //   clicking full heart
  likeButton.addEventListener("click", (e) => {
    count++;
    handleLikeButton(e, count);
  });

  //   adding comment on page
  commentForm.addEventListener("submit", (e) => {
    handleCommentFormSubmission(e);
  });
}

function handleDOMContentLoaded(e) {
  // fetch API - 1
  fetch("http://localhost:3000/images/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayInformation(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// wait HTML to load first
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
