function OpenScreen(props) {
  return (
    <div className="open-screen-content">
      <h1 className="header">Quizzical</h1>
      <p className="description">Click on start quiz to start the quiz</p>
      {/* on click: show questions screen */}
      <button
        className="start-btn"
        onClick={() => props.setShowQuestions(true)}
      >
        Start quiz
      </button>
    </div>
  );
}

export default OpenScreen;
