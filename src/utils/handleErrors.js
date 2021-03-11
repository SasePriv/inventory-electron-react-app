export const handleError = (error) => {
  switch (error) {
    case 'empty':
      return 'El campo no puede estar vacio';

    case 'bad-email':
      return 'Porfavor introduzca un correo valido';

    case 'short':
      return 'La contraseña tiene que ser de almenos 6 caracteres';

    case 'not equal':
      return 'Las contraseñas no son iguales';

    case 'email-exist':
      return 'El email ya esta siendo utilizado';

    case 'error-email':
      return 'Se produjo un error creando el usuario';

    case 'error-company':
      return 'Se produjo un error creando el usuario';

    case 'error-general':
      return 'Se produjo un error en el servicio';

    case 'email-not-exist':
      return 'El email o usuario no se encuentra registrado';

    case 'auth-fail':
      return 'Contraseña incorrecta';

    case 'error-company-login':
      return 'Error obteniendo la informacion de la cuenta';

    default:
      return 'DefaultError';
  }
};
