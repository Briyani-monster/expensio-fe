import React, { useState } from "react";
import Input from "./Components/core/Input";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className=" h-screen flex items-center justify-center w-full">
      <Input
        value={selected}
        onChange={(e) => {
          setSelected(e?.target?.value);
        }}
      />
    </div>
  );
}

export default App;
