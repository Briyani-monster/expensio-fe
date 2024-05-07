import React, { useState } from "react";
import Chip from "./Components/core/Chip";

function App() {
  const [selected, setSelected] = useState(false);
  return (
    <div className="text-3xl h-screen flex items-center justify-center w-full">
      <Chip
        selected={selected}
        handleSelection={() => setSelected((prev) => !prev)}
      />
    </div>
  );
}

export default App;
