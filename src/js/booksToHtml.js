import { getData } from "./fetchedData";
import { getStarRating } from "./getStarRating";

export async function booksToHtml(category,startIndex,maxResults){
    let data = await getData(category,"AIzaSyB4nNke02GkYWRoTeuV4ZBPMTmd-aAwDUU",startIndex||0,maxResults||6);

    const place = document.getElementById("book_list");
    console.log(data)
    data.forEach((element,index) => {

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book_div")
        const stars = getStarRating(element.volumeInfo.averageRating);

        bookDiv.innerHTML = 
        `
            <div class="book_item" data-toLocalkey=${index+element.volumeInfo.title.split(" ").join("")}>
                <img class="book_item-thumbnail" src="${element.volumeInfo.imageLinks ? element.volumeInfo.imageLinks.thumbnail : "assets/book_icon_150971.png"}">
                <div class="book_item-info">
                    <span class="book_item-author">${element.volumeInfo.averageRating ? element.volumeInfo.authors.join(", ") : ''}</span>
                    <span class="book_item-title">${element.volumeInfo.title}</span>
                    <div class="book_item-rating">
                        <div class="book_item-rating_position">
                            <div class="book_item-rating_averageRating">${(element.volumeInfo.averageRating) ? stars : '' }</div>
                            <span class="book_item-rating_ratingsCount">${(element.volumeInfo.ratingsCount) ? element.volumeInfo.ratingsCount + ' review': ''}</span>
                        </div>
                    </div>
                    <span class="book_item-description">${element.volumeInfo.description ? element.volumeInfo.description.slice(0, 100) + "..." : "This book don't have description"}</span>
                    <span class="book_item-saleInfoRetailPrice">${element.saleInfo && element.saleInfo.listPrice ? element.saleInfo.listPrice.amount + element.saleInfo.listPrice.currencyCode: "This book not for sale"}</span>
                    <button class="book_item-button" data-index=${index} data-categories=${element.volumeInfo.categories}>buy now</button>
                </div>
            </div>
        `
        return place.appendChild(bookDiv)
    });
}