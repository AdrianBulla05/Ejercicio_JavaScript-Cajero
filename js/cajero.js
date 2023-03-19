console.log("cajero");

let nombreUsuario, ingresaClave, saldo;
const CLaveCorrecta = "1098Adrian";
const UsuarioCorrecto = "AdrianBulla06";
nombreUsuario = prompt("Ingrese su nombre de usuario");
ingresaClave = prompt("Ingrese su clave de usuario");
saldo = 1500;

if (nombreUsuario == UsuarioCorrecto && ingresaClave == CLaveCorrecta) {
  alert("Tu usuario y contrseña son correctos");
  document.write(`${nombreUsuario} tienes ${saldo} en tu cuenta`);
}
  else if (nombreUsuario != UsuarioCorrecto && ingresaClave != CLaveCorrecta) {
    alert("Tu usuario y contrseña no son correctos, inténtalo de nuevo, te quedan 3 intentos");
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    ingresaClave = prompt("Ingrese su clave de usuario");
    
  if (nombreUsuario != UsuarioCorrecto && ingresaClave != CLaveCorrecta) {
    alert("Tu usuario y contrseña no son correctos, inténtalo de nuevo, te quedan 2 intentos");
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    ingresaClave = prompt("Ingrese su clave de usuario");
  }
  if (nombreUsuario != UsuarioCorrecto && ingresaClave != CLaveCorrecta) {
    alert("Tu usuario y contrseña no son correctos, inténtalo de nuevo, te queda 1 intento");
    nombreUsuario = prompt("Ingrese su nombre de usuario");
    ingresaClave = prompt("Ingrese su clave de usuario");
  } 
} if (nombreUsuario == UsuarioCorrecto && ingresaClave == CLaveCorrecta){
    // document.write(`${nombreUsuario} tienes ${saldo} en tu cuenta`);
  }
  else {
    alert("Se ha bloqueado tu cuenta, comunícate con tu asesor");
    document.write(`${nombreUsuario} Se ha bloqueado tu cuenta, comunícate con tu asesor`);
  }
