// Danh sách câu hỏi và câu trả lời

// sample data
// {
//    image: "./image/LEFT/L (3).jpg",
//    question: "Trong hình là tay TRÁI hay PHẢI ?",
//    answer: ["Trái", "Phải"],
//    result: 0,
//    correct : true
// }

let arrAnswer = [];

const setNumCorrect = (arr) => {
   arrAnswer = [...arr];
};

const getCountCorrect = () => {
   let count = 0;
   for (let i of arrAnswer) {
      if (i.correct) {
         count++;
      }
   }
   console.log(arrAnswer);
   return count;
};

module.exports = { setNumCorrect, getCountCorrect };
