let product={
    kategorija: kategorija,
    rusis: rusis
}
var products = JSON.parse(localStorage.getItem('prduktai'));
localStorage.setItem('produktai',JSON.stringify(product))
saveProduct(product);
function createproduct(kategorija,rusis) {
    var kategorija=document.getElementById('kategorija').value;
    var rusis=document.getElementById('rusis').value;
    return {
        kategorija: kategorija,
        rusis: rusis
    };
}
function saveProduct(product) {
    products.push(product);
    localStorage.setItem('produktai', JSON.stringify(products));
}
