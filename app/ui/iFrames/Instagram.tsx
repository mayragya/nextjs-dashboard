import { useEffect } from "react";

export default function InstagramFrame() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="rounded-lg border bg-white p-4 shadow">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CvHfSy8u8KM/"
        data-instgrm-version="14"
        style={{ width: "100%" }}
      ></blockquote>
    </div>
  );
}
