const bannerList = [
  {
    title: "SPY x FAMILY ",
    video: "https://www.youtube.com/embed/Oqd2C3oZkBU",
  },

  {
    title: "Chainsaw Man",
    video: "https://www.youtube.com/embed/eyonP1AgC0k",
  },
  {
    title: "Jujutsu Kaisen 0 Movie",
    video: "https://www.youtube.com/embed/eGSL-l95VXw",
  },
];

const banner = bannerList[Math.floor(Math.random() * bannerList.length)];

export default banner;
