//header
var content = $(".content"),
    mainTitle = $(".mainTitle"),
    subTitle = $(".subTitle"),
    arrowBtn = $(".arrowBtn"),

    person01Body = $(".person01Body"),
    person01Bodyhand = $(".person01Bodyhand"),
    person01Shadow = $(".person01Shadow"),

    person02Object = $(".person02Object"),
    person02Body = $(".person02Body"),
    person02Shadow = $(".person02Shadow"),

    person03Money = $(".person03Money"),
    person03Money01 = $(".person03Money01"),
    person03Money02 = $(".person03Money02"),
    person03Money03 = $(".person03Money03"),
    person03Money04 = $(".person03Money04"),
    person03Body = $(".person03Body");

function go01() {
    TweenMax.fromTo(mainTitle, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(subTitle, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person01Body, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person01Bodyhand, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person01Shadow, .5, {
        y: "100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person02Body, .5, {
        y: "-50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person02Shadow, .5, {
        y: "50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person02Object, .5, {
        y: "50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    // 03
    TweenMax.fromTo(person03Body, 1, {
        y: "50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(person03Money, 1, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
}

function set01() {
    TweenMax.set(person01Bodyhand, {
        y: "-100%",
        alpha: 1,
        rotationZ: 15,
        transformOrigin: "24% 54%"
    });

    TweenMax.set(person02Object, {
        scale: 0,
        alpha: 1,
        transformOrigin: "70% 90%"
    });

    TweenMax.set(person03Money01, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "100% 100%"
    });

    TweenMax.set(person03Money02, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "100% 100%"
    });

    TweenMax.set(person03Money03, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "0% 100%"
    });

    TweenMax.set(person03Money04, {
        x: "0",
        y: "0",
        scale: 0,
        alpha: 0,
        transformOrigin: "0% 100%"
    });
}

function play01() {
    TweenMax.to(person02Object, .2, {
        scale: 1,
        alpha: 1,
        yoyo: !0,
        repeat: -1,
        repeatDelay: .8,
        delay: .9,
        ease: Sine.easeOut
    });

    TweenMax.to(arrowBtn, .5, {
        y: "40%",
        yoyo: !0,
        repeat: -1,
        delay: 0,
        ease: Power2.easeIn
    })

    handTurn = new TimelineMax({
        repeat: -1,
        yoyo: !0,
        delay: 1,
        repeatDelay: .5,
        ease: Circ.easeOut
    });

    handTurn.to(person01Bodyhand, .6, {
        rotationZ: 0
    }).to(person01Bodyhand, .4, {
        scale: 1,
        alpha: 1
    })

    TweenMax.to(person02Object, .2, {
        scale: 1,
        alpha: 1,
        yoyo: !0,
        repeat: -1,
        repeatDelay: .8,
        delay: .9,
        ease: Sine.easeOut
    });

    money = new TimelineMax({
        repeat: -1,
        delay: 1,
        repeatDelay: 2,
        ease: Circ.easeOut
    }, "-=0.2");

    money.to(person03Money01, 1, {
        x: "3%",
        y: "3%",
        scale: 1,
        alpha: 1
    }), "-=0.2";

    money.to(person03Money02, 1, {
        x: "1%",
        y: "1%",
        scale: 1,
        alpha: 1
    }, "-=0.2");

    money.to(person03Money03, 1, {
        x: "1%",
        y: "1%",
        scale: 1,
        alpha: 1
    }, "-=0.2");

    money.to(person03Money04, 1, {
        x: "1%",
        y: "1%",
        scale: 1,
        alpha: 1
    }, "-=0.2")

}

function kill01() {
    TweenMax.killTweensOf(mainTitle);
    TweenMax.killTweensOf(subTitle);
    TweenMax.killTweensOf(arrowBtn);

    TweenMax.killTweensOf(person01Body);
    TweenMax.killTweensOf(person01Bodyhand);
    TweenMax.killTweensOf(person01Shadow);

    TweenMax.killTweensOf(person02Object);
    TweenMax.killTweensOf(person02Body);
    TweenMax.killTweensOf(person02Shadow);

    TweenMax.killTweensOf(person03Money);
    TweenMax.killTweensOf(person03Money01);
    TweenMax.killTweensOf(person03Money02);
    TweenMax.killTweensOf(person03Money03);
    TweenMax.killTweensOf(person03Money04);
    TweenMax.killTweensOf(person03Body);
}

go01();
set01();
play01();


// #q1
var q1Bg = $(".q1Bg"),
    q1Shadow = $(".q1Shadow"),
    q1Hand = $(".q1Hand"),
    q1Body = $(".q1Body");

function goQ1() {
    TweenMax.fromTo(q1Bg, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(q1Hand, .8, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(q1Body, .8, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(q1Shadow, .8, {
        y: "100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
};

function setQ1() {
    TweenMax.set(q1Hand, {
        y: "-100%",
        alpha: 1,
        rotationZ: 30,
        transformOrigin: "71% 54%"
    });
};

function playQ1() {
    q1HandTurn = new TimelineMax({
        repeat: -1,
        yoyo: !0,
        delay: 1,
        repeatDelay: .3,
        ease: Circ.easeOut
    });

    q1HandTurn.to(q1Hand, .5, {
        rotationZ: 0
    }).to(q1Hand, .4, {
        scale: 1,
        alpha: 1
    })

};

function killQ1() {
    TweenMax.killTweensOf(q1Bg);
    TweenMax.killTweensOf(q1Shadow);
    TweenMax.killTweensOf(q1Hand);
    TweenMax.killTweensOf(q1Body);
}

goQ1();
setQ1();
playQ1();


// #p1
var p1Pic = $(".p1Pic"),
    p1Bg = $(".p1Bg img");

function goP1() {
    TweenMax.fromTo(p1Pic, .5, {
        y: "-200%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(p1Bg, .5, {
        y: "100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
};

function setP1() {
    TweenMax.to(p1Pic, .4, {
        y: "0%",
        alpha: 1,
        repeat: 0,
        delay: .6,
        ease: Power4.easeOut
    });
};

function playP1() {
    manJump = new TimelineMax({
        repeat: -1,
        yoyo: !0,
        delay: 1,
        repeatDelay: 0,
        ease: Circ.easeOut
    });

    manJump.to(p1Pic, .5, {
        y: "-8%",
        scale: 1,
        alpha: 1
    }), "-=0.5";
};

function KillP1(){
    TweenMax.killTweensOf(p1Pic);
    TweenMax.killTweensOf(p1Bg);
}

goP1();
setP1();
playP1();


// #p2
var btnRegistered = $("#btn-registered"),
    btnLogin = $("#btn-login"),
    dualCheck = $("#dualCheck"),
    p2Body = $(".p2Body"),
    p2Shadow = $(".p2Shadow"),
    p2Hand = $(".p2Hand");

function goP2() {
    TweenMax.fromTo(btnRegistered, 1, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(btnLogin, 1, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(dualCheck, 1, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(p2Body, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(p2Hand, .5, {
        y: "-100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });

    TweenMax.fromTo(p2Shadow, .5, {
        y: "100%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1
    });
}

function setP2() {
    TweenMax.set(p2Hand, {
        y: "-100%",
        alpha: 1,
        rotationZ: 15,
        transformOrigin: "64% 38%"
    });
};

function playP2() {
    p2HandTurn = new TimelineMax({
        repeat: -1,
        yoyo: !0,
        delay: 1,
        repeatDelay: .3,
        ease: Circ.easeOut
    });

    p2HandTurn.to(p2Hand, .5, {
        rotationZ: 0
    }).to(p2Hand, .4, {
        scale: 1,
        alpha: 1
    })
};

function KillP2() {
    TweenMax.killTweensOf(btnRegistered);
    TweenMax.killTweensOf(btnLogin);
    TweenMax.killTweensOf(dualCheck);
    TweenMax.killTweensOf(p2Body);
    TweenMax.killTweensOf(p2Shadow);
    TweenMax.killTweensOf(p2Hand);
}

goP2();
setP2();
playP2();