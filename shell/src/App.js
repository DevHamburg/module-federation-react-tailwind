import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

const RemoteWrapper = ({ children }) => (
  <div>
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

const MFE1React = React.lazy(() => import("MFE1_REACT/App"));
const MFE2React = React.lazy(() => import("MFE2_REACT/App"));

function App() {
  return (
    <div className="App">
      <div className="shell-container">
        <h1>SHELL</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Shell Thailwind Button (here is the package installed)
        </button>
        <RemoteWrapper>
          <React.Suspense fallback="Loading...">
            <MFE1React />
          </React.Suspense>
        </RemoteWrapper>
        <RemoteWrapper>
          <React.Suspense fallback="Loading...">
            <MFE2React />
          </React.Suspense>
        </RemoteWrapper>
      </div>
    </div>
  );
}

export default App;
