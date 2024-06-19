const wrapper = document.querySelector(".gallery .wrapper"),
  carousel = document.querySelector(".gallery .carousel"),
  images = document.querySelectorAll(".gallery .carousel img"),
  buttons = document.querySelectorAll(".gallery .button");
let imageIndex = 1,
  intervalId;
const autoSlide = () => {
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
autoSlide();
const slideImage = () => {
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex)
  autoSlide();
};
buttons.forEach((button) => button.addEventListener("click", updateClick));
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);

