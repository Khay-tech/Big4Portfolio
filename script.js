// Form submission handling
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value,
    message: document.getElementById("message").value,
  }

  // Validate form
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    alert("Please fill in all required fields")
    return
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address")
    return
  }

  // Log form data (in a real application, you would send this to a server)
  console.log("Form submitted:", formData)

  // Show success message
  alert("Thank you for your message! We will get back to you within 24 hours.")

  // Reset form
  contactForm.reset()
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Apply animation to cards on scroll
document.querySelectorAll(".team-card, .service-card, .testimonial-card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  observer.observe(card)
})
