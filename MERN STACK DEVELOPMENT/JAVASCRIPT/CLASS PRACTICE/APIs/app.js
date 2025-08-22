let url = 'https://openlibrary.org/search.json?title=';

let btn = document.querySelector("button");
let fact = document.querySelector("#fact");

// btn.addEventListener("click", async () => {
//   let name = document.querySelector("input").value;
//   console.log(name);
// })

let name = 'harry+porter';

async function check() {
  try {
    let response = await axios.get(url + name);
    let books = response.data.docs; //array of books
    console.log(books);
    console.log("Number of books found: ", books.length);
    // console.log(books[0]);
    // for (let book of books) {
    //   console.log("Title:", book.title); 
    // }
  }
  catch (Err) {
    console.log(Err);
  }
}

check();  