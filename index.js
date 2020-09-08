export function shadowWizard(option) {
  let images = document.querySelectorAll(".shadowWizard");

  if (option.shadowType === "hard") {
    option.shadowType = "0px";
  } else {
    option.shadowType = "20px";
  }

  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${option.shadowType} 1px rgba(0, 0, 0, 0.2)`;

    if (option.padding) {
      image.style.padding = "2rem";
    }
  });
}
