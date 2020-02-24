console.log('OK');

/* Animate BG */
gsap.from ( '.artBG', {
    opacity: 0,
    duration: 1
  });
  
  /* End Animate BG */
  
  /* Animate Camera and Logo */
  gsap.from ( '#cameraBody', {
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
  gsap.from ( '#rightCan', {
    opacity: 0,
    duration: 1,
    delay: 2
  });
  gsap.from ( '#leftCan', {
    opacity: 0,
    duration: 1,
    delay: 2
  });
  gsap.from ('#leftTopBolts', {
    opacity: 0,
    duration: 1,
    delay: 2
  });
  gsap.from ('#leftBottomBolts', {
    opacity: 0,
    duration: 1,
    delay: 2
  });
  gsap.from ('#rightTopBolts', {
    opacity: 0,
    duration: 1,
    delay: 2
  });
  gsap.from ('#rightBottomBolts', {
    opacity: 0,
    duration: 1,
    delay: 2
  });