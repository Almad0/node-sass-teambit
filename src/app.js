let root = new Vue({

  el: "#root",

  data: {
    logo: "./dist/img/logo.svg",
    navLink: [
      {
        name: "Solutions",
        subMenu: [{}],
      },
      {
        name: "Pricing",
        subMenu: [{}],
      },
      {
        name: "Blog",
        subMenu: [{}],
      },
      {
        name: "Sign in",
        subMenu: [{}],
      },
    ],


    workFlowImgOne: [
      {
        img: "./dist/img/hardcore.png",
        text: "they are hardcore, formal and disconnected",
      },
      {
        img: "./dist/img/nofeedback.png",
        text: "they are hardcore, formal and disconnected",
      },
      {
        img: "./dist/img/notsafe.png",
        text: "they are hardcore, formal and disconnected",
      },
    ],

    workFlowImgtwo: [
      {
        img: "./dist/img/lightweight.png",
        text: "it's lightweight fun and interconnected",
      },
      {
        img: "./dist/img/feedbacksuggestions.png",
        text: "it encurages regular feedback with contextual request",
      },
      {
        img: "./dist/img/safe.png",
        text: "It creates a safe environment for dialog",
      },
    ],

  },


  methods: {

    // topScroll() {
    //   window.scrollTo(0, 0);
    // },
  },


});









// fine
