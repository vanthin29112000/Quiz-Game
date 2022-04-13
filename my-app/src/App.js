import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QuizGame } from "./Container/Quizgame";
function App() {
   return (
      <BrowserRouter>
         <QuizGame></QuizGame>
      </BrowserRouter>
   );
}

export default App;
