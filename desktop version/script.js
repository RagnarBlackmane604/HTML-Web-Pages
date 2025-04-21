// Testimonials Logic
const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform is an absolute game-changer for competitive programmers...",
  },
  {
    name: "Iida Niskanen",
    position: "Data Engineer",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I can't express enough how valuable this platform has been for me...",
  },
  {
    name: "Renee Sims",
    position: "Cloud engineer",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "If you're serious about excelling in competitive coding, look no further...",
  },
  {
    name: "Sasha Ho",
    position: "PhD student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I've tried numerous competitive programming platforms, but none come close...",
  },
  {
    name: "Veeti Seppanen",
    position: "Frontend developer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge...",
  },
];

let currentIndex = 0;

function showTestimonial(index) {
  const testimonial = testimonials[index];
  document.getElementById("user-photo").src = testimonial.photo;
  document.getElementById("user-name").textContent = testimonial.name;
  document.getElementById("user-position").textContent = testimonial.position;
  document.getElementById("user-text").textContent = testimonial.text;
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Auto-loop every 3 seconds
setInterval(() => {
  nextTestimonial();
}, 3000);

// Initialize on page load
window.onload = () => {
  showTestimonial(currentIndex);
};

// Set dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Form validation with SweetAlert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("Name");
  const email = document.getElementById("Email");
  const message = document.getElementById("Message");

  let isValid = true;

  if (!name.value.trim()) {
    document.getElementById("error-Name").textContent = "Name is required.";
    isValid = false;
  }

  if (!email.value.trim()) {
    document.getElementById("error-Email").textContent = "Email is required.";
    isValid = false;
  }

  if (!message.value.trim()) {
    document.getElementById("error-Message").textContent =
      "Message is required.";
    isValid = false;
  }

  if (isValid) {
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us.",
      confirmButtonColor: "#8053ff",
    });

    this.reset(); // Optionally clear the form
  }
});

// Clear error messages on input focus
["Name", "Email", "Message"].forEach((id) => {
  document.getElementById(id).addEventListener("focus", function () {
    document.getElementById(`error-${id}`).textContent = "";
  });
});
