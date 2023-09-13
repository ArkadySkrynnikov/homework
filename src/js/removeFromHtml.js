export async function removeInnerHtml(){
    const listOfNodes = document.querySelectorAll(".book_div");

    for(let i = 0 ; i < listOfNodes.length ; i++){
        listOfNodes.item(i).remove();
    }
}