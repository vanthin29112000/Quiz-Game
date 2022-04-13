import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setNumCorrect } from "../../Data/answer";
import { countQuestion, question } from "../../Data/question";
import { shuffle } from "../../seeder";
import { Question } from "../Question";

export const RenderQuestion = () => {
   const [showSentence, setShowSentence] = useState(0);
   const history = useHistory();
   const [arrAnswer, setArrAnswer] = useState([]);
   question = shuffle(question);
   const checkResultAndSave = (result, numQuestion) => {
      let tempObj = {
         ...question[numQuestion],
      };

      if (question[numQuestion].result === result) {
         tempObj["correct"] = true;
      } else {
         tempObj["correct"] = false;
      }

      arrAnswer.push(tempObj);
      setArrAnswer(arrAnswer);

      if (showSentence + 1 < countQuestion) {
         setShowSentence(showSentence + 1);
      } else {
         setNumCorrect(arrAnswer);
         history.push("/result");
      }
   };

   return (
      <>
         <Question
            countQuestion={countQuestion}
            showSentence={showSentence}
            question={question[showSentence]}
            checkResultAndSave={checkResultAndSave}
            key={showSentence}
         ></Question>
      </>
   );
};
