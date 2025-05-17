const togglePlan = document.getElementById("BillingCycle");
const prices = document.querySelectorAll(".price");

function syncPrices() {
  const isYearly = togglePlan.checked;

  prices.forEach((priceEl) => {
    // swap the number
    priceEl.textContent = isYearly
      ? priceEl.dataset.yearly
      : priceEl.dataset.monthly;

    // swap the unit label (the very next <span>)
    const labelEl = priceEl.nextElementSibling;
    labelEl.textContent = isYearly ? "per year" : "per month";
  });
}

togglePlan.addEventListener("change", syncPrices);

window.addEventListener("DOMContentLoaded", syncPrices);
