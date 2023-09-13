export function localStorageCircle(key){
    let circle = document.querySelector(".localStorage");
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    };
    circle.innerHTML = localStorage.length;
}