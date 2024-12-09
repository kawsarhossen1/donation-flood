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

let totalDonations = 0;
let donationHistory = [];

// Function to show or hide the display area with content
function updateDisplayArea(content, title) {
  const displayArea = document.getElementById("display-area");
  displayArea.classList.remove("hidden");
  displayArea.innerHTML = `<h2 class="text-2xl font-semibold text-gray-800">${title}</h2>${content}`;
}

// Attach event listeners to "Donate Now" buttons
document.querySelectorAll("#donate-now").forEach((button) => {
  button.addEventListener("click", () => {
    const parentSection = button.closest(".container");
    const donationInput = parentSection.querySelector("#donation-input");
    const donationCounter = parentSection.querySelector("#donation-counter");

    const donationAmount = parseFloat(donationInput.value);

    if (!isNaN(donationAmount) && donationAmount > 0) {
      totalDonations += donationAmount;

      // Add donation to history with timestamp
      donationHistory.push({
        amount: donationAmount,
        time: new Date().toLocaleString(),
      });

      // Update local counter
      let currentAmount = parseFloat(
        donationCounter.textContent.replace(" BDT", "")
      );
      currentAmount += donationAmount;
      donationCounter.innerHTML = `<img src="./images/coin.png" alt="" /> ${currentAmount.toFixed(
        2
      )} BDT`;

      donationInput.value = ""; // Clear input
    } else {
      alert("Please enter a valid donation amount!");
    }
  });
});

// Handle "Show Total Donations" button click
document
  .getElementById("show-total-donations")
  .addEventListener("click", () => {
    const content = `<p class="text-green-600 text-lg font-semibold">Total Donations: ${totalDonations.toFixed(
      2
    )} BDT</p>`;
    updateDisplayArea(
      content,
      `Total Donations: ${totalDonations.toFixed(2)} BDT`
    );
  });

// Handle "Show Donation History" button click
document
  .getElementById("show-donation-history")
  .addEventListener("click", () => {
    if (donationHistory.length === 0) {
      const content = `<p class="text-red-600 text-lg font-semibold">No donations have been made yet.</p>`;
      updateDisplayArea(content, `Donation History: 0 BDT`);
      return;
    }

    // Create a list of donation history
    const historyList = donationHistory
      .map(
        (entry, index) =>
          `<li class="text-gray-700">Total Donation: <strong>${entry.amount} BDT</strong> at ${entry.time}</li>`
      )
      .join("");

    const content = `
    <ul class="list-disc list-inside mt-2">${historyList}</ul>
  `;
    updateDisplayArea(
      content,
      `Donation History: ${totalDonations.toFixed(2)} BDT`
    );
  });
