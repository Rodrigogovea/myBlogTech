const url = 'https://jsonplaceholder.typicode.com/comments2';

fetch(url) 
.then((response) => {
    if(response.ok) {
        return response.json();
    }
    throw new Error('Ocurrio algo... ')
})
.then(data => {
    console.log(data);
})
.catch(error =>{
    console.log(error.message);
})