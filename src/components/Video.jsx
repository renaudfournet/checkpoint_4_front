import ReactPlayer from'react-player';

function Video() {
  return <div style={{ color: "white", margin: "40px" }}>
    <ReactPlayer style={{float: "left", margin: "40px"}} url="https://www.youtube.com/watch?v=21Nr7CA9XmQ" />
    <ReactPlayer style={{float: "right", margin: "40px"}} url="https://www.youtube.com/watch?v=dxwQLOleaxY" />
    <ReactPlayer style={{float: "left", margin: "40px"}} url="https://www.youtube.com/watch?v=LmFWUt6Y4HI" />
</div>
}

export default Video;