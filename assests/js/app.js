document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="radio-bt"]');
  const leftArrow = document.querySelector(".nav-left");
  const rightArrow = document.querySelector(".nav-right");

  let current = 0;

  function updateSlide() {
    radios[current].checked = true;
  }

  leftArrow.addEventListener("click", () => {
    current = current > 0 ? current - 1 : radios.length - 1;
    updateSlide();
  });

  rightArrow.addEventListener("click", () => {
    current = current < radios.length - 1 ? current + 1 : 0;
    updateSlide();
  });

  // Permite clicar nas bolinhas pra trocar também
  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      current = index;
    });
  });
});
