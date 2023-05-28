import "./Video.css";

function Video({ title, channel, views, time, verified, id, children }) {
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/160/90`} alt="img" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel} {verified && '✅'}</div>
                <div className="view">{views} views <span>.</span> {time}</div>
                <div>{children}</div>
            </div>
        </>
    )
}
export default Video;