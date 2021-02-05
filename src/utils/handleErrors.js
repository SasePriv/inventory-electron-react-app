const handleError = (error) => {

    switch (error) {
        case "empty":
            return "El campo no puede estar vacio"
        
        case "bad-email":
            return "Porfavor introduzca un correo valido"

        case "short":
            return "La contraseña tiene que ser de almenos 6 caracteres"
    
        case "not equal":
            return "Las contraseñas no son iguales"

        default:
            break;
    }
}

module.exports = {
    handleError
}