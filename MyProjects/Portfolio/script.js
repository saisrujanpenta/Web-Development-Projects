// car1

const carPath1 = {
    autoRotate: true,
    values:[
       {x:100, y: 0}, {x:200, y:0}, {x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:window.innerWidth, y:0} 
    ]
};

const tween1 = new TimelineLite();

tween1.add(
    TweenLite.to('.car1', 2.5, {
        bezier: carPath1,
        ease: Power1.easeInOut
    })
);


// car2

const carPath2 = {
    autoRotate: true,
    values:[
       {x:100, y: 0}, {x:200, y:0}, {x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:window.innerWidth, y:0} 
    ]
};

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to('.car2', 3, {
        bezier: carPath2,
        ease: Power1.easeInOut
    })
);


// car3

const carPath3 = {
    autoRotate: true,
    values:[
       {x:100, y: 0}, {x:200, y:0}, {x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:window.innerWidth, y:0} 
    ]
};

const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to('.car3', 2.75, {
        bezier: carPath2,
        ease: Power1.easeInOut
    })
);


// car4

const carPath4 = {
    autoRotate: true,
    values:[
       {x:100, y: 0}, {x:200, y:0}, {x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:window.innerWidth, y:0} 
    ]
};

const tween4 = new TimelineLite();

tween4.add(
    TweenLite.to('.car4', 2, {
        bezier: carPath2,
        ease: Power1.easeInOut
    })
);


// car5

const carPath5 = {
    autoRotate: true,
    values:[
       {x:100, y: 0}, {x:200, y:0}, {x:300, y:0}, {x:400, y:0}, {x:500, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:window.innerWidth, y:0} 
    ]
};

const tween5 = new TimelineLite();

tween5.add(
    TweenLite.to('.car5', 2.5, {
        bezier: carPath2,
        ease: Power1.easeInOut
    })
);


// fadein animation

$(document).ready(function () {
    $('.text').fadeIn(6000).removeClass('hidden');
});

$(document).ready(function () {
    $('.logo').fadeIn(6000).removeClass('hidden');
});

$(document).ready(function () {
    $('.nav-item').fadeIn(6000).removeClass('hidden');
});



































































// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//     triggerElement: '.animation',
//     duration: 3000,
//     triggerHook: 0
// })

// .setTween(tween)
// .addIndicators()
// .setPin('.animation')
// .addTo(controller);