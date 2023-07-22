import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCel, setCel } from "../reducers/slices/celSlice";
import "./estilosComponents.css";

const CelebritiesList = ({ celebridades }) => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel);

    function handleAdd(celid) {
        const celebridad = celebridades.find(c => c.birthday === celid);

        if (celebrities_List.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));

        } else {
            dispatch(setCel(celebridad));
        }
        console.log(celebridad);
    }
    return (
        <div>
            <section id="seccion_celebridades">
                {celebridades.map(c => {
                    return (
                        <div class="card" id="divCard">
                            < div class="card-body">
                                <h2 class="card-title" id="nombre_tarjeta">Nombre: {c.name}</h2>
                                <ul class="list-group" id="lista_detalles">
                                    <li class="list-group-item" >Edad: {c.age}</li>
                                    <li class="list-group-item" >Nacionalidad: {c.nationality}</li>
                                    <li class="list-group-item" >Estatura: {c.height}</li>
                                    <li class="list-group-item" >Ocupaciones: {c.occupation}</li>
                                    {/* <div>{c.occupation}</div> */}
                                </ul><br></br>
                                <button type="button" class="btn btn-outline-success" id="boton_favoritos" onClick={() => handleAdd(c.birthday)}>
                                    Agregar a Favoritas</button>
                            </div>
                        </div>

                    )
                })}
            </section>
        </div>

    )
}

export default CelebritiesList;