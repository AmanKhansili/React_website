import "./App.css";
import Video from "./component/Video";
import video from "./Data/Data";
import PlayButton from "./component/PlayButton";
import Counter from "./component/Counter";
function App() {
    return (
        <div className="App">
            <div>Videos</div>
            {
                video.map(video =>
                    <Video
                        key={video.id}
                        title={video.title}
                        channel={video.channel}
                        views={video.views}
                        time={video.time}
                        verified={video.verified}
                        id={video.id}
                    >
                        <PlayButton
                            onPlay={() => console.log('play',video.title)}
                            onPause={() => console.log('pause',video.title)}
                        >
                            {video.title}
                        </PlayButton>
                    </Video>
                    )}
            <div>
            <Counter></Counter>
            </div>
        </div>
    );
}
export default App;