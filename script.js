/* Qui ci riscriviamo la funzione per la creazione del carrello */

const fetchBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responses) => {
      console.log(responses);

      if (responses.ok) {
        return responses.json();
      } else {
        throw new Error("errore nel fetch");
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
          "card border border-light-subtle border-4 mb-3 bg-black ";

        card.style.height = "760px";

        const divImg = document.createElement("div");
        divImg.style.width = "368px";
        divImg.style.height = "510px";

        const img = document.createElement("img");
        img.style.width = "90%";
        img.style.height = "100%";
        img.style.overflow = "hidden";
        img.style.objectFit = "cover";
        img.style.paddingTop = "20px";
        img.src = book.img;
        img.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText = `${book.title}`;

        const price = document.createElement("p");
        price.className = "card-text bg-dark text-info";
        price.innerText = `${book.price} $`;
        price.style.margin = "50px";

        const button = document.createElement("button");
        button.className = "btn btn-success me-3";
        button.innerText = "+ Aggiungi al carrello";

        const button2 = document.createElement("button");
        button2.className = "btn btn-danger";
        button2.innerText = "scarta";

        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(divImg);
        divImg.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        cardBody.appendChild(button2);

        button2.onclick = function (e) {
          e.preventDefault();
          col.remove();
        };

        button.onclick = function (e) {
          e.preventDefault();

          const ul = document.getElementById("ul");
          const li = document.createElement("li");
          li.innerText = `${book.title} - ${book.price} $`;
          li.className = "list-group-item p-3  ";
          ul.appendChild(li);

          let carrello = localStorage.getItem("carrello")
            ? JSON.parse(localStorage.getItem("carrello"))
            : [];

          carrello.push({ title: book.title, price: book.price });

          localStorage.setItem("carrello", JSON.stringify(carrello));
        };
      });
    })
    .catch((err) => console.log(err));
};

window.onload = () => {
  fetchBooks();
};
