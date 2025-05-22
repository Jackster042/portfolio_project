import React from "react";
import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <>
      <div className="w-full h-auto px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          {/* other components here */}
          <h1>project</h1>
        </div>
      </div>
    </>
  );
};

export default App;
