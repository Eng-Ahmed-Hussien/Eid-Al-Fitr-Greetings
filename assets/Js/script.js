 const card = document.getElementById("card");
    let autoFlipTimeout;

    document.addEventListener("DOMContentLoaded", () => {
      autoFlipTimeout = setTimeout(() => {
        card.classList.add("flipped");
      }, 5000);

      card.addEventListener("click", function () {
        clearTimeout(autoFlipTimeout);
        this.classList.toggle("flipped");
      });

      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          clearTimeout(autoFlipTimeout);
          this.classList.toggle("flipped");
        }
      });
    });