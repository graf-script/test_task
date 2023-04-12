(function () {
  const pictures = ["contBcg-0", "contBcg-1", "contBcg-2", "contBcg-3"];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll(".btn");
  const wrapper = document.querySelector(".wrapper");
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        wrapper.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`;
      }
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        wrapper.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();

/* text slider */

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let list = [].slice.call(
  document.querySelector(".main__slider-container").children
);

function findActiveList() {
  let activeList = list.findIndex((e) => {
    return e.classList.contains("active");
  });

  list[activeList].classList.remove("active", "fadeInRight", "animated");

  return activeList;
}

function slideShow() {
  let activeList = findActiveList();

  activeList++;
  activeList = activeList === list.length ? 0 : activeList;

  list[activeList].classList.add("active", "fadeInRight", "animated");
}

nextButton.addEventListener("click", slideShow);

prevButton.addEventListener("click", () => {
  let activeList = findActiveList();

  activeList--;
  activeList = activeList === -1 ? list.length - 1 : activeList;

  list[activeList].classList.add("active", "fadeInRight", "animated");
});

/*COUNTER JS*/

let add = document.querySelector("#next");
let subract = document.querySelector("#prev");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 4) {
    result = 1;
  }

  output.innerText = result;
});

subract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0 || result === 0) {
    result = 4;
  }

  output.innerText = result;
});

/*------auto-slider---------*/

let slide = [].slice.call(document.querySelector(".multiple-items").children);
let sliderCount = document.querySelector("#output-count");

function autoCounter() {
  let counterResult = Number(sliderCount.innerText) + 1;
  if (counterResult > 2) {
    counterResult = 1;
  }

  sliderCount.innerText = counterResult;
}

setInterval(autoCounter, 5000);

function findActiveSlide() {
  let activeSlide = slide.findIndex((e) => {
    return e.classList.contains("activeSlide");
  });

  slide[activeSlide].classList.remove("activeSlide", "fadeInRight", "animated");

  return activeSlide;
}

function activeSlideShow() {
  let findSlide = findActiveSlide();

  findSlide++;
  findSlide = findSlide === slide.length ? 0 : findSlide;

  slide[findSlide].classList.add("activeSlide", "fadeInRight", "animated");
}

setInterval(activeSlideShow, 5000);

/* Gallery slider */

let leftButton = document.getElementById("prevValue");
let rightButton = document.getElementById("nextValue");
let galleryList = [].slice.call(
  document.querySelector(".gallery-content__main").children
);

function findGalleryPart() {
  let galleryActive = galleryList.findIndex((e) => {
    return e.classList.contains("active");
  });

  galleryList[galleryActive].classList.remove(
    "active",
    "fadeInRight",
    "animated"
  );

  return galleryActive;
}

function slideGallery() {
  let activePart = findGalleryPart();

  activePart++;
  activePart = activePart === galleryList.length ? 0 : activePart;

  galleryList[activePart].classList.add("active", "fadeInRight", "animated");
}

rightButton.addEventListener("click", slideGallery);

leftButton.addEventListener("click", () => {
  let activePart = findGalleryPart();

  activePart--;
  activePart = activePart === -1 ? galleryList.length - 1 : activePart;

  galleryList[activePart].classList.add("active", "fadeInRight", "animated");
});

rightButton.addEventListener("click", function () {
  let output = document.querySelector("#outputValue");
  let result = Number(output.innerText) + 1;

  if (result > 2) {
    result = 1;
  }

  output.innerText = result;
});

leftButton.addEventListener("click", function () {
  let output = document.querySelector("#outputValue");
  let result = Number(output.innerText) - 1;

  if (result < 0 || result === 0) {
    result = 1;
  }

  output.innerText = result;
});
