export const handleScrollTo = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
  };
  