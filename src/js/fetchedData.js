export async function getData(category,apiKey,startIndex,maxResults){
    const url = `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;
    try{
        const responce = await fetch(url)
        const dataG = await responce.json()
        return dataG.items;
    } catch(error){
        console.group();
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        console.group();
    }
}