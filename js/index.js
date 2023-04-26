const ratingButtons = document.querySelectorAll(".item");
const submitButton = document.getElementById("submit-button");
const ratingSection = document.getElementById("rating-state-section");
const thankSection = document.getElementById("thank-state-section");
const errorSection = document.getElementById("error-state-section");
const ratedValue = document.getElementById("rated-number");
const closeErrorSection = document.getElementById("close-error-section");

let selectedRating = null;

const showErrorSection = () => {
  errorSection.classList.remove("invisible", "opacity-0");
  errorSection.classList.add("visible", "opacity-1");
  ratingSection.classList.add("hidden");
};

const removeErrorSection = () => {
  errorSection.classList.remove("visible", "opacity-1");
  errorSection.classList.add("invisible", "opacity-0");
  ratingSection.classList.remove("hidden");
};

const showThankSection = () => {
  thankSection.classList.remove("hidden", "invisible", "opacity-0");
  thankSection.classList.add("visible", "opacity-1", "block");

  ratingSection.classList.add("hidden", "opacity-0", "invisible");
};

const toRate = () => {
  ratingButtons.forEach((rateButton) => {
    rateButton.addEventListener("click", () => {
      selectedRating = rateButton.dataset.value;
      ratedValue.textContent = selectedRating;
      console.log(selectedRating);
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedRating !== null) {
      showThankSection();
    } else {
      showErrorSection();
    }
  });
};

toRate();
closeErrorSection.addEventListener("click", removeErrorSection);
