// Initialize flipbook
document.addEventListener("DOMContentLoaded", () => {
  $("#flipbook").turn({
    width: 600,
    height: 400,
    autoCenter: true
  });

  // Balloons animation
  for (let i = 0; i < 10; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    document.querySelector(".balloons").appendChild(balloon);
    gsap.to(balloon, {
      y: -400,
      x: Math.random() * 200 - 100,
      duration: 5 + Math.random() * 3,
      repeat: -1,
      ease: "power1.inOut"
    });
  }

  // Ribbons animation
  for (let i = 0; i < 5; i++) {
    let ribbon = document.createElement("div");
    ribbon.className = "ribbon";
    document.querySelector(".ribbons").appendChild(ribbon);
    gsap.to(ribbon, {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "linear"
    });
  }
});
