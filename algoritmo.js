import Cartuchera from "./cartucheras.js";


const cartuchera1= new Cartuchera();
const cartuchera2= new Cartuchera();

cartuchera1.setNombre("cartuchera1");
cartuchera2.setNombre("cartuchera2");

cartuchera1.setEstado("roja");
cartuchera2.setEstado("grande");

console.log(cartuchera2.getNombre());


