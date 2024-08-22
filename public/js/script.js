// Slider Tour Detail
const sliderMain = document.querySelector(".sliderMain");
if (sliderMain) {
  const swiper = new Swiper(".sliderMain", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
// End Slider Tour Detail

// alert-add-cart-success
const alertAddCartSuccess = () => {
  const elementAlert = document.querySelector("[alert-add-cart-success]");
  if(elementAlert) {
    elementAlert.classList.remove("alert-hidden");

    setTimeout(() => {
      elementAlert.classList.add("alert-hidden");
    }, 3000);

    const closeAlert = elementAlert.querySelector("[close-alert]");
    closeAlert.addEventListener("click", () => {
      elementAlert.classList.add("alert-hidden");
    })
  }
}
// End alert-add-cart-susscess

// Carts

// Tạo giỏ hàng mới nếu chưa có
const cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Thêm tour vào cart
const formAddToCart = document.querySelector("[form-add-to-cart]");
if (formAddToCart) {
  formAddToCart.addEventListener("submit", (event) => {
    event.preventDefault();

    const quantity = parseInt(event.target.elements.quantity.value);
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"));

    if (quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));

      const indexExistTour = cart.findIndex((item) => item.tourId == tourId);

      if (indexExistTour == -1) {
        cart.push({
          tourId: tourId,
          quantity: quantity,
        });
      } else {
        cart[indexExistTour].quantity =
          cart[indexExistTour].quantity + quantity;
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alertAddCartSuccess();
    }
  });
}

// End Carts
