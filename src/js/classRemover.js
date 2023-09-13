export function classRemover(list,clas){
    for(let x = 0 ; x < list.length ; x++){
        list.item(x).classList.remove(clas);
    }
}