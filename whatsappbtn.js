document.addEventListener("DOMContentLoaded", function () {
  // Inject CSS
  const style = document.createElement("style");
  style.innerHTML = `
    .floating_btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    @keyframes pulsing {
      to {
        box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
      }
    }
    .contact_icon {
      background-color: #42db87;
      color: #fff;
      width: 60px;
      height: 60px;
      font-size: 30px;
      border-radius: 50px;
      text-align: center;
      box-shadow: 2px 2px 3px #999;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translatey(0px);
      animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      box-shadow: 0 0 0 0 #42db87;
    }
    .text_icon {
      margin-top: 8px;
      color: #707070;
      font-size: 13px;
      font-weight: 600;
    }
    .floating_btn a {
      text-decoration: none;
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const btnContainer = document.createElement("div");
  btnContainer.className = "floating_btn";
  btnContainer.innerHTML = `
    <a target="_blank" href="https://wa.me/7312430000">
      <div class="contact_icon">
        <i class="bi bi-whatsapp my-float"></i>
      </div>
    </a>
    <p class="text_icon">Talk to us?</p>
  `;
  document.body.appendChild(btnContainer);
});