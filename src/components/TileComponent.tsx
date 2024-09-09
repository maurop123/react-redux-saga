export default function(props) {
  return (
    <div className="pl-1.5 m-3">
      <iframe
        src={`https://youtube.com/embed/${props.videoId}`}
        className="h-48 w-78"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <span>{props.title}</span>
    </div>
  )
}
