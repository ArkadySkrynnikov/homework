import { booksToHtml } from "./booksToHtml";
import { getCategoryList } from "./categoryList";
import { removeInnerHtml } from "./removeFromHtml";
import { classRemover } from "./classRemover";
import { getData } from "./fetchedData";
import { localStorageCircle } from "./circleCounterFromLocal";

let [ arrOfCategoryes , categoryList ] = getCategoryList();

async function initBooks(category){

    await booksToHtml(category,0,6);

    let stashItem = document.querySelector(".localStorage");

    const place = document.getElementById("book_list");
    let loadMoreButton = document.createElement("button");
    let divForLoadMore = document.createElement("div");
    divForLoadMore.classList.add("divForLoadMore");
    loadMoreButton.innerText = "load more";
    loadMoreButton.classList.add("button_loadMore");
    divForLoadMore.appendChild(loadMoreButton);
    place.appendChild(divForLoadMore);
    let book_div = document.querySelector(".book_div");
    book_div.value = 6;

    categoryList.forEach((e,i)=>e.addEventListener("click",async function(){
        classRemover(categoryList,"active_list_item");
        categoryList.item(i).classList.add("active_list_item");
        removeInnerHtml();
        await booksToHtml(arrOfCategoryes[i],0,6);
        book_div.value = 6;
    }));

    loadMoreButton.addEventListener("click",async function(){
        for(let i = 0; i < categoryList.length; i++){
            if(categoryList.item(i).classList.contains("active_list_item")){
                console.log(book_div.value)
                await booksToHtml(arrOfCategoryes[i],book_div.value+=6,6);
            }
        }
    });

    place.onclick = async function(event){
        let buyButton = event.target.closest(".book_item-button");
        if (!buyButton) return;
        let datatolocal = event.target.closest(".book_item");
        let dataFromLocal = await getData(buyButton.dataset.categories,"AIzaSyB4nNke02GkYWRoTeuV4ZBPMTmd-aAwDUU",buyButton.dataset.index,1);
        if(buyButton.classList.contains("book_item-button-active")){
            localStorage.removeItem(datatolocal.dataset.tolocalkey);
            buyButton.innerText = "buy now";
            buyButton.classList.remove("book_item-button-active");
        } else{
            localStorage.setItem(datatolocal.dataset.tolocalkey,JSON.stringify(dataFromLocal));
            buyButton.innerText = "in the cart";
            buyButton.classList.add("book_item-button-active");
            stashItem.innerHTML++
        }
    }

    localStorageCircle();

    // stashItem.onclick = function(){
    //     localStorage.clear();
    // }
}
 
document.addEventListener("DOMContentLoaded",function(){
    initBooks(arrOfCategoryes[0])
});