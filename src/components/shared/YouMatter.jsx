import { useEffect, useState } from "react";

export default function YouMatter() {
  const [textState, setTextState] = useState("create");

  useEffect(() => {
    let textIs = textState;

    const isInterval = setInterval(() => {
      if (textIs === "create") setTextState("play");
      if (textIs === "play") setTextState("win");
      if (textIs === "win") setTextState("repeat");
      if (textIs === "repeat") setTextState("create");
    }, 1500);

    return () => clearTimeout(isInterval);
  }, [textState]);
  return (
    <p className="text-uppercase">
      You <span data-attribute={textState}>{textState}</span>
    </p>
  );
}
