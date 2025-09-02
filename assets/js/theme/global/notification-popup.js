// Mock purchase data (replace with API data later)
const purchases = [
  { customer: "John", product: "Blue T-Shirt", price: "$29.99", image: "assets/img/camden-test.jpg", timeAgo: "Just now" },
  { customer: "Sarah", product: "Wireless Headphones", price: "$89.99", image: "assets/img/camden-test.jpg", timeAgo: "1 minute ago" },
  { customer: "Mike", product: "Sneakers", price: "$59.99", image: "assets/img/camden-test.jpg", timeAgo: "2 minutes ago" },
  { customer: "Emma", product: "Backpack", price: "$39.99", image: "assets/img/camden-test.jpg", timeAgo: "3 minutes ago" }
];

function showPurchaseNotification() {
  // Pick a random purchase
  const purchase = purchases[Math.floor(Math.random() * purchases.length)];
  const notification = document.createElement("div");
  notification.className = "purchase-notification";
  notification.innerHTML = `
    <div class="notification-image">
      <img src="${purchase.image}" alt="${purchase.product}">
    </div>
    <div class="notification-text">
      <p class="notification-customer">${purchase.customer} purchased:</p>
      <p class="notification-product">${purchase.product}</p>
      <p class="notification-price">${purchase.price}</p>
      <p class="notification-time">${purchase.timeAgo}</p>
    </div>
  `;
  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Show first notification on page load
  showPurchaseNotification();
  // Show notification every 0.5 minute (30000ms)
  setInterval(showPurchaseNotification, 30000);
});