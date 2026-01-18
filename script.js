document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("hero-container");
  const hudCircle = document.getElementById("hud-circle");
  const root = document.documentElement; // For CSS variables

  const revealSize = 125; // Radius for the Iron Man reveal circle

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Set initial reveal size to 0
  root.style.setProperty("--reveal-size", `0px`);

  heroContainer.addEventListener("mousemove", (e) => {
    const rect = heroContainer.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // Make sure the HUD circle is visible when hovering
    gsap.to(hudCircle, { opacity: 1, duration: 0.3 });
    gsap.to(root, { "--reveal-size": `${revealSize}px`, duration: 0.3 });
  });

  heroContainer.addEventListener("mouseleave", () => {
    // Hide the HUD circle and shrink the reveal area when mouse leaves
    gsap.to(hudCircle, { opacity: 0, duration: 0.3 });

    gsap.addto(root, { "--reveal-size": `0px`, duration: 0.3 });

    // Move HUD off-screen instantly so it doesn't linger
    gsap.set(hudCircle, { x: -9999, y: -9999 });
    root.style.setProperty("--cursor-x", `-9999px`);
    root.style.setProperty("--cursor-y", `-9999px`);
  });

  // GSAP ticker for smooth animation loop
  gsap.ticker.add(() => {
    // Smoothly interpolate currentX and currentY towards mouseX and mouseY
    currentX += (mouseX - currentX) * 0.15; // Lower number for more lag
    currentY += (mouseY - currentY) * 0.15; // Higher number for less lag

    // Update CSS variables
    root.style.setProperty("--cursor-x", `${currentX}px`);
    root.style.setProperty("--cursor-y", `${currentY}px`);

    // Position the HUD circle
    gsap.set(hudCircle, { x: currentX, y: currentY });
  });
});
