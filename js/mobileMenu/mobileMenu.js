export const getMobileMenu = (btnOpen, btnClose, mobileMenuBlock) =>{
    document.querySelector(btnOpen).addEventListener("click", function () {
      document.querySelector(mobileMenuBlock).classList.add("onActive");
    });
    document.querySelector(btnClose).addEventListener("click", function () {
      document.querySelector(mobileMenuBlock).classList.remove("onActive");
    });
  }