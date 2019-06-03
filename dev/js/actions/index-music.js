export const selectMusic = (music) => {
  console.log("You have selected following music : ", music.music_name);

  return {
    type: "MUSIC_SELECTED",
    payload: music
  };
}
