console.log('OK');

/* Animate BG */
gsap.from( '.artBG', {
  opacity: 0,
  duration: 1
});

gsap.from( '#rightOuterStep', {
  /* opacity: 1, */
  delay: .5,
  duration: 1.5,
  y:-200
});
gsap.from( '#rightCenterStep', {
  /* opacity: 1, */
  delay: .4,
  duration: 1.5,
  y:-200
});
gsap.from( '#rightInnerStep', {
  /* opacity: 1, */
  delay: .3,
  duration: 1.5,
  y:-200
});
gsap.from( '#rightTriangle', {
  /* opacity: 1, */
  delay: .2,
  duration: 1.5,
  y:-200
});
gsap.from( '#rightSlant', {
  /* opacity: 1, */
  delay: .1,
  duration: 1.5,
  y:-200
});


gsap.from( '#innerDiamond', {
  delay: .1,
  transformOrigin: '50% 50%',
  scale: .4,
  duration: 2
});
gsap.from( '#centerDiamond', {
  delay: .1,
  transformOrigin: '50% 50%',
  scale: .4,
  duration: 2
});
gsap.from( '#outerDiamond', {
  /* opacity: 1, */
  delay: .1,
  duration: 2,
  y:200
});

gsap.from( '#leftOuterStep', {
  /* opacity: 1, */
  delay: .5,
  duration: 1.5,
  y:-200
});
gsap.from( '#leftCenterStep', {
  /* opacity: 1, */
  delay: .4,
  duration: 1.5,
  y:-200
});
gsap.from( '#leftInnerStep', {
  /* opacity: 1, */
  delay: .3,
  duration: 1.5,
  y:-200
});
gsap.from( '#leftTriangle', {
  /* opacity: 1, */
  delay: .2,
  duration: 1.5,
  y:-200
});
gsap.from( '#leftSlant', {
  /* opacity: 1, */
  delay: .1,
  duration: 1.5,
  y:-200
});

/* End Animate BG */

/* Animate Camera and Logo */
gsap.from( '#cameraBody', {
  x: 000,
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1
});

gsap.from ('#googleText', {
  opacity:0,
  duration: 1,
  delay: 1.5
});

/* Animate Cans */
gsap.from( '#rightCan', {
  opacity: 0,
  duration: 1,
  delay: 2
});
gsap.to( '#rightCan', {
  rotate: 360,
  repeat: -1,
  transformOrigin: '50% 50%',
  ease:"linear",
  duration: 1.5
});

gsap.from( '#leftCan', {
  opacity: 0,
  duration: 1,
  delay: 2
});
gsap.to( '#leftCan', {
  rotate: 360,
  repeat: -1,
  transformOrigin: '50% 50%',
  ease:"linear",
  duration: 1.5
});
/* gsap.from('#leftTopBolts', {
  opacity: 0,
  duration: 1,
  delay: 2
});
gsap.from('#leftBottomBolts', {
  opacity: 0,
  duration: 1,
  delay: 2
});
gsap.from('#rightTopBolts', {
  opacity: 0,
  duration: 1,
  delay: 2
});
gsap.from('#rightBottomBolts', {
  opacity: 0,
  duration: 1,
  delay: 2
}); */