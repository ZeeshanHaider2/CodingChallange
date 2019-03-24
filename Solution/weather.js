let quoteOfDay = () => {
  const quoteUrl = "https://api.myjson.com/bins/19l9p.json";
  const getQuotePromise = fetch(quoteUrl);

  getQuotePromise.then(data => {
    data.json().then(allQuotes => {
      //restApi has been parsed and converted into JS object, which has been  saved in allQuotes. We will shuffle the allQuotes i.e.objects by using math.random method to get a single random Js object.
      let shuffeledQuote =
        allQuotes[Math.floor(Math.random() * allQuotes.length)];
      let y = '"' + shuffeledQuote.quote + '" - ' + shuffeledQuote.author;
      document.getElementById("quote").innerHTML = y;
    });
  });
};

const ourButton = document.getElementById("quote-button");
ourButton.addEventListener("click", quoteOfDay);
