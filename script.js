$(document).ready(function() {
    // Initialize flipbook
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true
    });

    // Animate balloons
    $(".balloons").each(function(index, element) {
        gsap.to(element, {
            y: -400,
            duration: 4 + index,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });

    // Animate ribbon
    gsap.to(".ribbons", {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear"
    });
});
