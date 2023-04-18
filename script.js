
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
        authorText.textContent = 'Unknown';
        console.log('Unknown');
    }else{
        authorText.textContent = quote.author;
    }
    // check quote length to determine style
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent= quote.text;
    
}

async function getQuote(){
    const apiurl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiurl);
        apiQuotes = await response.json();

        // console.log(apiQuotes);
        newQuote();
    }catch(error){
        // catch error here

    }
}

function tweetQuote(){
    const twitterUrl ='https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}';
    //?means query parameter
    window.open(twitterUrl,'_blank');
}
NewQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

 getQuote();