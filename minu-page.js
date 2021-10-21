window.d = 6000;

var myFullpage = new fullpage("#fullpage", {
  lockAnchors: true,
  scrollingSpeed: 600,
  afterRender: () => {
    setInterval(() => {
      if (myFullpage.getActiveSection().isLast) myFullpage.moveTo(1);
      myFullpage.moveSectionDown();
    }, window.d);
  },
});
