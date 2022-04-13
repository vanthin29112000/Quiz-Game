import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getCountCorrect } from "../../Data/answer";
import { countQuestion } from "../../Data/question";
import "./result.css";
export const Result = () => {
   const [countCorrect, setCountCorrect] = useState(getCountCorrect());
   const history = useHistory();
   return (
      <div className="result-game__container">
         <p className="result-game__title">KẾT QUẢ BÀI THI</p>
         <p className="result-game__content">
            {countCorrect}/{countQuestion}
         </p>
         <div
            className="result-game__button"
            onClick={() => {
               history.push("/");
            }}
         >
            Trở về trang chủ
         </div>
      </div>
   );
};
