anime.timeline({loop:!0}).add({targets:".ml5 .line",opacity:[.5,1],scaleX:[0,1],easing:"easeInOutExpo",duration:700}).add({targets:".ml5 .line",duration:600,easing:"easeOutExpo",translateY:(e,a)=>1.25*a-.625+"em"}).add({targets:".ml5 .ampersand",opacity:[0,1],scaleY:[.5,1],easing:"easeOutExpo",duration:600,offset:"-=600"}).add({targets:".ml5 .letters-left",opacity:[0,1],translateX:["0.5em",0],easing:"easeOutExpo",duration:600,offset:"-=300"}).add({targets:".ml5 .letters-right",opacity:[0,1],translateX:["-0.5em",0],easing:"easeOutExpo",duration:600,offset:"-=600"}).add({targets:".ml5",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3});