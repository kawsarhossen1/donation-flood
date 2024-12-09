let totalNavbarDonations = 0;

// Update Amount Button when a donation is made
function updateAmountButton() {
  const amountButton = document.getElementById("amount-button");
  amountButton.textContent = `Amount: ${totalNavbarDonations.toFixed(2)} BDT`;
}

// Attach event listeners to "Donate Now" buttons
document.querySelectorAll("#donate-now").forEach((button) => {
  button.addEventListener("click", () => {
    const parentSection = button.closest(".container");
    const donationInput = parentSection.querySelector("#donation-input");
    const donationAmount = parseFloat(donationInput.value);

    if (!isNaN(donationAmount) && donationAmount > 0) {
      totalNavbarDonations += donationAmount;
      updateAmountButton();
    }
  });
});