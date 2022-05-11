



function Noticia(){
    const articulo = {
        titulo: "Musk consigue más de USD 7.000 millones de dólares para financiar compra de Twitter",
        descripcion: "Elon Musk afirmó haber recaudado 7.140 millones de dólares para financiar la compra de Twitter, y mencionó entre los inversores al cofundador de Oracle Larry Ellison y al príncipe y empresario saudí Al Walid bin Talal."
    }

    const {titulo,descripcion} = articulo;
    return(
        <div>
            <h1>{titulo}</h1>
            <p> {descripcion}</p>
        </div>
    );
};

export default Noticia;