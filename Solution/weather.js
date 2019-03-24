quoteOfDay = () => {
  const quoteUrl = "https://api.myjson.com/bins/19l9p.json";
  const getQuotePromise = fetch(quoteUrl);

  getQuotePromise.then(data => {
    data.json().then(allQuotes => {
      //restApi has been converted into JS object, which is saved in allQuotes. We will shuffle the allQuotes i.e.objects by using math.random method to get a single random Js object.
      let shuffeledQuotes =
        allQuotes[Math.floor(Math.random() * allQuotes.length)];
      let y = '"' + shuffeledQuotes.quote + '" - ' + shuffeledQuotes.author;
      document.getElementById("quote").innerHTML = y;
    });
  });
};

const ourButton = document.getElementById("quote-button");
ourButton.addEventListener("click", quoteOfDay);