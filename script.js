const fetchBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responses) => {
      console.log(responses);

      if (responses.ok) {
        return responses.json();
      }
    })
    .then((books) => {
      const row = document.getElementById("row");

      console.log(books);
      /*       console.log(books.data); qui non esiste data */

      books.forEach((book) => {
        const col = document.createElement("div");
        col.className = "col-4";

        const card = document.createElement("div");
        card.className =
          "card border border-light-subtle border-4 mb-3 bg-black";
        card.style.width = "376px";

        const img = document.createElement("img");
        img.style.width = "100%";
        img.src = book.img;
        img.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText = `${book.title}`;

        const price = document.createElement("p");
        price.className = "card-text";
        price.innerText = `${book.price} $`;
        price.style.color = "red";

        const button = document.createElement("a");
        button.className = "btn btn-success";
        button.innerText = "+ Aggiungi al carrello";

        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
      });
    });
};

window.onload = () => {
  fetchBooks();
};
