export function getCategoryList (){
    let categoryList = document.querySelectorAll(".list_item");
    let arrOfCategoryes = [];
    for(let i = 0 ; i<categoryList.length ; i=i+1){
        let classListItem = categoryList.item(i);
        arrOfCategoryes.push(classListItem.dataset.value);
    }
    return [ arrOfCategoryes ,categoryList ];
}