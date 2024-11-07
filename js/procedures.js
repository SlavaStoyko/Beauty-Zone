export const openMassage = (params) => {
       params.forEach((element) => {
      element.addEventListener("mouseover", () => {
        cleaNer();
      element.children[0].classList.add("onActive");
      });
    });
    params.forEach((element) => {
      element.addEventListener("touchstart", (e) => {
        e.view.onclick = (event) => {
          event.preventDefault();
          cleaNer();
          e.target.children[0].classList.add("onActive");
        };
      });
    });
    function cleaNer() {
      params.forEach((element) => {
        element.childNodes[0].classList.remove("onActive");
      });
    }
  };
  