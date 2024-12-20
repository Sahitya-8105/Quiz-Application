import React from "react";

// images
import yellowBlob from "./assets/images/blobs-yellow.png";
import blueBlob from "./assets/images/blobs-blue.png";

// components
import OpenScreen from "./components/OpenScreen";
import Questions from "./components/Questions";
import LoginPage from "./components/loginpage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showQuestions, setShowQuestions] = React.useState(false);

  return (
    <div>
      <img src={yellowBlob} className="blobs-yellow" />
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : showQuestions ? (
        <Questions />
      ) : (
        <OpenScreen setShowQuestions={setShowQuestions} />
      )}
      <img src={blueBlob} className="blobs-blue" />
    </div>
  );
}

export default App;
