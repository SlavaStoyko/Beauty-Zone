export const openMassage = (params) => {
    return params.forEach((element) => {
      element.addEventListener("mouseover", () => {
      element.children[0].children[0].classList.add("onActive");
      });
    });
  };
  export const closeMassage = (params) => {
    return params.forEach((element) => {
      element.addEventListener("mouseout", () => {
        element.children[0].children[0].classList.remove("onActive");
      });
    });
  };