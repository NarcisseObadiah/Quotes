const quotes = [{
    quote: "You only live once, but if you do it right, once is enought",
    writer:`-Mae West`
},{
    quote: "Never let the fear of striking out keep you from playing the game.",
    writer:`-Babe Ruth`
},{
    quote: "The purpose of our lives is to be happy",
    writer:`-Dalai Lama`
},{
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up",
    writer:`-Thomas A. Edison`
},{
    quote: "Money and success don’t change people; they merely amplify what is already there.",
    writer:`-Will Smith`
},{
    quote: "You only live once, but if you do it right, once is enoughtYour time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    writer:`-Steve Jobs`
},

]
//declaration des var recuperant les element html
let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

//evenement qui se passera au clique de ce boutton

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})