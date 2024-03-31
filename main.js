const wordsTextarea = document.querySelector(".word-counter-container .words");
const countbtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");

const countWords = () => {
    let words = wordsTextarea.value;
    let wordsTrimmed = words.replace(/\s+/g," ").trim();
    let splitWords = wordsTrimmed.split(" ");

    console.log(splitWords);

    let numberOfWords = splitWords.length;
    if(splitWords[0]  == ""){
        numberOfWords = 0;
    }

    wordCount.innerHTML = numberOfWords;
};

countbtn.addEventListener("click",countWords);
