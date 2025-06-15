export default function YoutubeFrame() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        width="100%"
        height="315"
        allowFullScreen
        className="rounded-md w-full"
      ></iframe>
    </div>
  );
}
