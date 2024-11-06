
export const getScrollUp = (event) => {
    event.preventDefault();
    const page = document.querySelector(".mapLocation");
  return page.scrollIntoView({ behavior: "smooth" });

  
};

