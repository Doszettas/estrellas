import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';
import "./estilosAuth.css";



export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user));
        }
    }, [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return (
            <main id="cargando">
                <img src="https://media.tenor.com/yRzKGP_7Ju8AAAAi/peach-goma-peach-goma-charge.gif" alt="imagen_cargando"></img>
                <h5>Cargando...</h5>
            </main>
        )
    }

    return (
        <main id="cuerpo_login">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 class="text-center" id="titulo_login">Bienvenido</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src='https://img.freepik.com/vector-gratis/alfombra-roja-celebridades-evento-formal-banner_1284-17417.jpg?w=740&t=st=1689955823~exp=1689956423~hmac=ca7646e6ecf7c0d3e2d19265ed2dcb48ccb8b9d0c64d5b8ea00e8186729930d6' alt='Celebridad' />
                    <br></br>
                    <h3> <strong>Accede desde el siguiente botón</strong></h3>
                    <br></br>
                    <button type="button" class="btn btn-outline-danger" id="boton_login" onClick={handleLogin}>Iniciar Sesión</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            {/* <section>
                <h1 id="titulo_login">Bienvenido</h1>
            </section> */}
        </main>
    );
}

// export default Login