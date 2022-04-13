let question = [];
const renderData = () => {
   for (let i = 0; i <= 204; i++) {
      question.push({
         image: `./image/LEFT/L (${i}).jpg`,
         question: "Trong hình là tay TRÁI hay PHẢI ?",
         answer: ["Trái", "Phải"],
         result: 0,
      });
   }
   for (let i = 223; i <= 517; i++) {
      question.push({
         image: `./image/RIGHT/R (${i}).jpg`,
         question: "Trong hình là tay TRÁI hay PHẢI ?",
         answer: ["Trái", "Phải"],
         result: 1,
      });
   }
   return question;
};

function shuffle(array) {
   var currentIndex = array.length,
      temporaryValue,
      randomIndex;

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
   }

   return array;
}
module.exports = { renderData, shuffle };
