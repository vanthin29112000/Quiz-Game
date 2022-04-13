import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { RenderQuestion } from "../../Component/renderQuestion";
import { Result } from "../../Component/result";

export const QuizGame = () => {
   return (
      <div className="quiz-game__container">
         <Switch>
            <Route path="/" exact>
               <RenderQuestion />
            </Route>
            <Route path="/result">
               <Result />
            </Route>
         </Switch>
      </div>
   );
};
