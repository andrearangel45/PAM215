function verificarUsuario(usuario) {
    return new Promise((res, err) => {
        if(usuario === "admin"){
            res( "Acceso concedido");
        }else{
            err ("Acceso denegado");
        }
    });

}

verificarUsuario("admin")
    .then(res => console.log(res)) // acceso concedido
    .catch(err => console.error(err));

verificarUsuario("Ivan")
    .then (res => console.log(res))
    .catch(err => console.error(err));// accceso denegado