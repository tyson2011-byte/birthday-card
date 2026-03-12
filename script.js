$(document).ready(function() {
    // Initialize flipbook
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true
    });

    // Animate each balloon differently
    $(".balloons").each(function(index, element) {
        gsap.to(element, {
            y: -400 - (index * 50), // stagger heights
            duration: 3 + index,    // different speeds
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });

    // Ribbons spinning animation
    gsap.to(".ribbons", {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear"
    });
});
