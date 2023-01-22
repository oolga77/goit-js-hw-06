const navLiElem = document.querySelectorAll('#categories .item');
console.log('Number of categories:', navLiElem.length);


 [...navLiElem].forEach((categorie) => {
    console.log('Category:', categorie.querySelector('h2').textContent);
    console.log('Elements:', categorie.lastElementChild.children.length)
 });
 

