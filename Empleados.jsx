import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils";

function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);
    //useState y useEffect son hooks
    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "servicioempleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListaEmpleados(data);
            })
    }

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-4">

                {listaEmpleados.map(item =>
                    <div className="col" key={item.idempleado}>
                        <div className="card">
                            <img src={ApiWebURL + "fotos/" + item.foto} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                                <p className="card-text">{item.cargo}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        )
    }

    return (
        <section className="padded">
            <div className="container">
                <h2>Empleados</h2>
                {dibujarCuadricula()}
            </div>
        </section>
    )
}

export default Empleados