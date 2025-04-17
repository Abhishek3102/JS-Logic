function loadImage(url, callback) {
  var image = new Image();

  image.onload = function () {
    callback(null, image);
  };

  image.onerror = function () {
    callback(new Error("Could not load image at" + url));
  };
  image.src = url;
}

// fetch("https://prepnudge.vercel.app/suggestions").then((response) =>
//   response
//     .json()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error))
// );
