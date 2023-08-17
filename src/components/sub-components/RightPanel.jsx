import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/images/icon-arrow-down.svg";
import data from "../../assets/data/accordion.json";

function Faqs({ question, answer, id }) {
  const [visible, setVisible] = useState(false);

  function handleVisibility(id) {
    const answerDiv = document.getElementById(id);

    if (!visible) {
      setVisible(true);
      answerDiv.style.height = "50px";
    } else {
      setVisible(false);
      answerDiv.style.height = "0";
    }
  }

  return (
    <div className="faq-container">
      <div onClick={() => handleVisibility(id)} className="faq">
        <p className="question">{question}</p>
        <DownArrow className="arrow" />
      </div>
      <div id={id} className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="right-panel-container">
      <h1 className="heading">FAQ</h1>
      <div>
        {data.map((item, index) => {
          return (
            <Faqs id={index} question={item.question} answer={item.answer} />
          );
        })}
      </div>
    </div>
  );
}

export default RightPanel;
