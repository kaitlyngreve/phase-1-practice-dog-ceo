// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const fetchDogs = () => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => addImage(data))
        // .then(response => console.log(response.json))
}