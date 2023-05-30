const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage= "none"
    
    if(textArea.value ==="") {
        swal("Ooops!!!", "debe ingresar un texto", "warning");
    }
    if(textArea.value = textArea.value.match(/[^a-z ]/)){/* esto deja q se ingrese solo letras */ 
        swal("Ooops!!!", "debe ingresar solo letras sin acento y simbolos", "warning");
        mensaje.value = "";
    }
    textArea.value =""
}

function encriptar(stringEncriptada){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase() /* toLowerCase vuelve todo el valor en minuscula */ 
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){/*El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda */
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) /*devuelve una nueva cadena con algunas o todas las coincidencias de un patrón , siendo cada una de estas coincidencias reemplazadas por remplazo */
        }
    }
   return stringEncriptada
}

function botonDesencriptar(){
    
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    if(textArea.value ==="") {
        swal("Ooops!!!", "debe ingresar un texto", "warning");
    }
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0])
        } 
    }
    return stringDesencriptada
}

function botonCopiarPegar() {
    const textoEncriptado = Copiarpegar(textArea.value)
    mensaje.value = textoEncriptado
    
  
}
function Copiarpegar(){
    const textArea = document.querySelector(".mensaje").value;
    document.querySelector(".text-area").value=textArea ;
    mensaje.value = "";
    mensaje.backgroundImage = url(Muñeco.png);
    
}



