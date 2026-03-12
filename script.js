$(document).ready(function() {
    // Initialize flipbook
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true
    });

    // Balloons floating animation
    gsap.to(".balloons", {
        y: -400,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Ribbons spinning animation
    gsap.to(".ribbons", {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear"
    });
});
