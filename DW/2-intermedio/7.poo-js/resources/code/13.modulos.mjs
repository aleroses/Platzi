function play_video(id) {
  const secret_url =
    "https://platzisecret.com/" + id;
  console.log("Playing from url " + secret_url);
}
function pause_video(id) {
  const secret_url =
    "https://platzisecret.com/" + id;
  console.log("Paused from url " + secret_url);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  play() {
    play_video(this.videoID);
  }
  pause() {
    pause_video(this.videoID);
  }
}

export { PlatziClass };
