import './PlayButton.css';
function PlayButton({children, onPause,onPlay}) {
  let playing = false;
  function handleClick(e) {
    console.log(e0                                                                                                   )
    e.stopPropagation();
    if(playing) onPause()
    else onPlay();

    playing =!playing;
  }
  return (
    <button onClick={handleClick}>{children} : {playing ? '>':'||'}</button>
  )
}
export default PlayButton;