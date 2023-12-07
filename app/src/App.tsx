import React from "react";

function App() {
  return (
    <div className="App">
      <div>
        計測時間
        <input type="number" defaultValue={0} />分
        <input type="number" defaultValue={0} />秒
      </div>
      <p>残り時間 0秒</p>
      <button>スタート</button>
      <button>一時停止</button>
      <button>リセット</button>
    </div>
  );
}

export default App;
