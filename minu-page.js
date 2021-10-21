window.d = 7000;

var myFullpage = new fullpage("#fullpage", {
  lockAnchors: true,
  scrollingSpeed: 600,
  afterRender: () => {
    setInterval(() => {
      if (myFullpage.getActiveSection().isLast) myFullpage.moveTo(0);
      myFullpage.moveSectionDown();
    }, window.d);
  },
});
