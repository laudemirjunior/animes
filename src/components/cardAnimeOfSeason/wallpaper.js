import death from "../../videos/death.mp4";
import name from "../../videos/name.mp4";
import demon from "../../videos/demon.mp4";

const wallpaperList = [
  {
    title: "Death Note",
    video: death,
  },

  {
    title: "Your Name",
    video: name,
  },
  {
    title: "Demon Slayer",
    video: demon,
  },
];

const wallpaper =
  wallpaperList[Math.floor(Math.random() * wallpaperList.length)];

export default wallpaper;
