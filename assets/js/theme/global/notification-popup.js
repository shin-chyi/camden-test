function showPurchaseNotification() {
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

  setTimeout(() => {
    notification.remove();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  showPurchaseNotification();
  setInterval(showPurchaseNotification, 30000);
});