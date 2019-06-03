export default function (state=null, action){
  switch (action.type) {
    case "MUSIC_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
