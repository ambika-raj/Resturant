const slides = document.querySelectorAll(".slide_images");
var counter = 0;

slides.forEach((slide_images, index) => {
  slide_images.style.top = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1; // Set counter to the last image index
  }
  slideImage();
};

const goNext = () => {
  counter++;
  if (counter === slides.length) {
    counter = 0; // Set counter to the first image index
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide_images) => {
    slide_images.style.transform = `translateY(-${counter * 100}%)`;
  });
};
