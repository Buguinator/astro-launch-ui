import { useEffect } from "react";

export default function Feed({
  id,
}: {
  id: string;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`${id} py-8 px-12 lg:py-20`}></div>
  );
}
