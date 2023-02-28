
// Arrays are used to store multiple values in a single variable.
// API(application programming interface is mechanis which enable two software component to communicate using set of definitions and protocols)
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitteBtn = document.getElementById("twitter");
const NewQuoteBtn = document.getElementById("new-quote");
let apiQuotes=[];

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if(!quote.author){
        authorText.textContent = "Uknown";
    }else{
        authorText.textContent = quote.author;
    }
    
    authorText.textContent = quote.author;
    quoteText.textContent= quote.text;
    
}

async function getQuote(){
    const apiurl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiurl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);
        newQuote();
    }catch(error){
        // catch error here

    }
}

 getQuote();