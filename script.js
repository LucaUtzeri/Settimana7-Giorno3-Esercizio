window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(response => response.json())
        .then(books => {
            console.log(books);
            books.forEach((elem) => {
                if (elem.img) {
                    const myRow = document.getElementById("Library");

                    const col = document.createElement("div");
                    col.className = "col-3";

                    const card = document.createElement("div");
                    card.className = "card w-100 text-start gy-5";
                    card.style = "height: 500px;"

                    const img = document.createElement("img");
                    img.className = "card-img-top h-50 object-fit-cover";
                    img.src = elem.img;

                    const cardBody = document.createElement("div");
                    cardBody.className = "card-body";

                    const cardTitle = document.createElement("h5");
                    cardTitle.className = "card-title";
                    cardTitle.innerText = elem.title;

                    const cardPrice = document.createElement("p");
                    cardPrice.className = "card-text";
                    cardPrice.innerText = elem.price;

                    const delBtn = document.createElement("button");
                    delBtn.className = "btn btn-primary";
                    delBtn.innerText = "Scarta";

                    delBtn.onclick = function (x) {
                        x.target.closest(".cardBody").remove()
                    }



                    cardBody.appendChild(cardTitle)
                    cardBody.appendChild(cardPrice)
                    cardBody.appendChild(delBtn)
                    card.appendChild(img)
                    card.appendChild(cardBody)
                    col.appendChild(card)
                    myRow.appendChild(col)
                }
            })

        })
        .catch(error => console.log(error))



}


// <!-- <div class="col-3">
//         <div class="card w-100">
//           <img src="..." class="card-img-top" alt="..." />
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//               Some quick example text to build on the card title and make up the bulk of the card's content.
//             </p>
//             <a href="#" class="btn btn-primary">Scarta</a>
//           </div>
//         </div>
//       </div> -->