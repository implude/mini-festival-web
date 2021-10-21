window.d = 5000;

var myFullpage = new fullpage("#fullpage", {
  lockAnchors: true,
  scrollingSpeed: 400,
  afterRender: () => {
    setInterval(() => {
      if (myFullpage.getActiveSection().isLast) myFullpage.moveTo(1);
      myFullpage.moveSectionDown();
    }, window.d);
  },
});
