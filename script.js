let apiQuotes=[];

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
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