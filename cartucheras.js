class Cartuchera{
    #nombre="def ninguna";
    #estado="def ninguna";
   
    setNombre(nombre){
        this.#nombre=nombre;
    }

    getNombre()
    {
        return this.#nombre
    }
    
    setEstado(estado){
        this.#estado= estado
    }

    getEstado(){
        return this.#estado
    }
    
    vacia(Antu) {
        console.log("se vacio toda");
    }
    

}



export default Cartuchera;
