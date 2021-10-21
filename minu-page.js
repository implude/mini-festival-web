window.d = 7000;

var myFullpage = new fullpage("#fullpage", {
  lockAnchors: true,
  scrollingSpeed: 500,
  afterRender: () => {
    setInterval(() => {
      if (myFullpage.getActiveSection().isLast) myFullpage.moveTo(1);
      myFullpage.moveSectionDown();
    }, window.d);
  },
});
