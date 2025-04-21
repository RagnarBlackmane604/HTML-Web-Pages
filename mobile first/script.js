<script>
  const toggle = document.querySelector(".menu-toggle");
  const navright = document.querySelector(".navright");

  toggle.addEventListener("click", () => {
    navright.classList.toggle("open");
  });
</script>