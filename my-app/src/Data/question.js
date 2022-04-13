// Sample data question
/*
    {
        image : "" (String) => đường dẫn hình ảnh lưu trữ ở file "public/image"
        question : "" (String) => Câu hỏi muốn hòi
        answer : [] (Array)=> Những câu trả lời trắc nghiệm
        result : 0 (number) => kết quả tương ứng VD : ["Trái","Phải"] - nếu kết quả là trái (0) và phải (1)
    }
 */

const { renderData } = require("../seeder");

const question = renderData();

const countQuestion = 12;

module.exports = { question, countQuestion };
