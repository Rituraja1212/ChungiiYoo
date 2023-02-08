var tl = gsap.timeline();

//  art 
tl
.from(".art h1",{
    y: "+90px",
    opacity:0,
    duration:1,
    delay:1,
    ease: "slow(0.7, 0.7, false)"
})

$('.art h1').textillate({ in: { effect: 'fadeInUp' }, duration:2 });
// $('#centre #one').textillate({ in: { effect: 'fadeInUp' }, duration:1 });
// $('#right #one').textillate({ in: { effect: 'fadeInUp' }, duration:2 });

// $(' .inlft  h1').textillate({ in: { effect: 'fadeInUp' }, duration:0 });
// $('#circle h3').textillate({ in: { effect: 'bounceIn' }, duration:2 });

// welcome wala 
tl

.from(".design span",{
    y:"-10px",
    opacity:0,
    duration:1,
    delay:1,
    ease: "slow(0.7,0.7, false)"
})


// .to(graph, { duration: 2.5, ease: "sine.out", y: -500 });


//  i always  stribe 
.from(".always span",{
    y:"-60px",
    top:"35%",
    opacity:0,
    duration:10,
    delay:1,
    // delay:1.5,
    ease: "power3.out",
    
})

.from(".mainhead span",{
    y:"-20px",
    opacity:0,
    duration:0.2,
    delay:1,
    ease: "power3.out"
})


