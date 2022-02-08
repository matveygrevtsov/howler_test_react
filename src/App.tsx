import React, { useEffect, useMemo } from "react";
import { Howl } from "howler";
// @ts-ignore
import test from "./test.flac";

function App() {
  const audio = useMemo(
    () =>
      new Howl({
        src: [test],
        loop: true,
      }),
    []
  );

  const handleClick = () => {
    if (audio.state() === "unloaded") {
      return alert("Не удалось загрузить файл");
    }
    if (audio.state() === "loading") {
      return alert("Подождите, файл загружается");
    }
    if (audio.playing()) {
      return audio.pause();
    }
    return audio.play();
  };

  return <button onClick={handleClick}>Тык</button>;
}

export default App;
