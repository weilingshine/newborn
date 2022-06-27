var $content = $(".content"),
    $mainTitle = $(".mainTitle"),
    $subTitle = $(".subTitle"),

    $person01Body = $(".person01Body"),
    $person01Bodyhand = $(".person01Bodyhand"),
    $person01Shadow = $(".person01Shadow"),

    $person02Object = $(".person02Object"),
    $person02Body = $(".person02Body"),
    $person02Shadow = $(".person02Shadow");

$person03Money = $(".person03Money"),
    $person03Money01 = $(".person03Money01"),
    $person03Money02 = $(".person03Money02"),
    $person03Money03 = $(".person03Money03"),
    $person03Money04 = $(".person03Money04"),
    $person03Body = $(".person03Body");

function go01() {
    TweenMax.fromTo($person01Body, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
    TweenMax.fromTo($person01Bodyhand, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
    TweenMax.fromTo($person01Shadow, .5, {
        y: "100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    // 02
    TweenMax.fromTo($person02Body, .5, {
        y: "-50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
    TweenMax.fromTo($person02Shadow, .5, {
        y: "50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
    TweenMax.fromTo($person02Object, .5, {
        y: "50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    // 03
    TweenMax.fromTo($person03Body, 1, {
        y: "50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
    TweenMax.fromTo($person03Money, 1, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
}

function set01() {
    TweenMax.set($person01Bodyhand, {
        y: "-100%",
        alpha: 1,
        rotationZ: 15,
        transformOrigin: "24% 54%"
    });

    TweenMax.set($person02Object, {
        scale: 0,
        alpha: 1,
        transformOrigin: "70% 90%"
    });
    // money
    TweenMax.set($person03Money01, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "100% 100%"
    });
    TweenMax.set($person03Money02, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "100% 100%"
    });
    TweenMax.set($person03Money03, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "0% 100%"
    });
    TweenMax.set($person03Money04, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "0% 100%"
    });


}

function play() {
    TweenMax.to($person01Bodyhand, .4, {
        y: "0%",
        alpha: 1,
        repeat: 0,
        delay: .6,
        ease: Power4.easeOut
    });
    TweenMax.to(arrowDown, .5, {
        y: "15%",
        yoyo: !0,
        repeat: -1,
        delay: 0,
        ease: Power2.easeOut
    })
    handTurn = new TimelineMax({
        repeat: -1,
        yoyo: !0,
        delay: 1,
        repeatDelay: .5,
        ease: Circ.easeOut
    });
    handTurn.to($person01Bodyhand, .6, {
        rotationZ: 0
    }).to($person01Bodyhand, .4, {
        scale: 1,
        alpha: 1
    })

    TweenMax.to($person02Object, .2, {
        scale: 1,
        alpha: 1,
        yoyo: !0,
        repeat: -1,
        repeatDelay: .8,
        delay: .9,
        ease: Sine.easeOut
    });
    // money
    money = new TimelineMax({
        repeat: -1,
        delay: 1,
        repeatDelay: 2,
        ease: Circ.easeOut
    }, "-=0.2");
    money.to($person03Money01, 1, {
        x: "3%",
        y: "3%",
        scale: 1,
        alpha: 1
    }), "-=0.2";
    money.to($person03Money02, 1, {
        x: "1%",
        y: "1%",
        scale: 1,
        alpha: 1
    }, "-=0.2");
    money.to($person03Money03, 1, {
        x: "1%",
        y: "1%",
        scale: 1,
        alpha: 1
    }, "-=0.2");
    money.to($person03Money04, 1, {
        x: "1%",
        y: "1%",
        scale: 1,
        alpha: 1
    }, "-=0.2")

}

function outQ6() {
    TweenMax.killTweensOf($q6);
    TweenMax.killTweensOf($q6Floor);
    TweenMax.killTweensOf($q6Man);
    TweenMax.killTweensOf($q6Note1);
    TweenMax.killTweensOf($q6Note2);
    TweenMax.killTweensOf($q6Note3);
    TweenMax.killTweensOf($q6Note4);
    TweenMax.killTweensOf($q6Shadow);
    TweenMax.killTweensOf($q6Bubble);
    TweenMax.killTweensOf($q6Group);
    noteFly.kill();
    manJump.kill()
}




// #p1
// var $p1Pic = $(".p1Pic"),
//     $p1Bg = $(".p1Bg img");


// function goP1() {
//     TweenMax.fromTo($p1Pic, .5, {
//         y: "-200%",
//         opacity: 0
//     }, {
//         y: "0%",
//         opacity: 1
//     });
//     TweenMax.fromTo($p1Bg, .5, {
//         y: "100%",
//         opacity: 0
//     }, {
//         y: "0%",
//         opacity: 1
//     });
// }

// function setP1() {
//     TweenMax.to($p1Pic, .4, {
//         y: "0%",
//         alpha: 1,
//         repeat: 0,
//         delay: .6,
//         ease: Power4.easeOut
//     });
// }

// function playP1() {
//     manJump = new TimelineMax({
//         repeat: -1,
//         yoyo: !0,
//         delay: 1.01,
//         repeatDelay: 0,
//         ease: Circ.easeOut
//     });
//     manJump.to($p1Pic, .5, {
//         y: "-7%"
//     }, "-=0.5")
// }
// goP1();
// setP1();
// playP1();