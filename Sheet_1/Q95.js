//. Flipping an Image
 var flipAndInvertImage = function (image) {
  const rows = image.length;

  for (let i = 0; i < rows; i++) {
    const cols = image[i].length;

    for (let j = 0; j < Math.ceil(cols / 2); j++) {
      const temp = image[i][j] ^ 1;
      image[i][j] = image[i][cols - 1 - j] ^ 1;
      image[i][cols - 1 - j] = temp;
    }
  }

  return image;
};

const input = [
  [1, 0, 0],
  [0, 1, 1]
];

const result = flipAndInvertImage(input);
console.log(result);
