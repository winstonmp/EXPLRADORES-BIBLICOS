// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Download button handlers
  const downloadBtns = document.querySelectorAll(".download-btn")
  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("En un sitio real, esto descargaría el PDF. Por ahora, puedes agregar tus propios archivos PDF.")
    })
  })
})
