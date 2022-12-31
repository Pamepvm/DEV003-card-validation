/*function checkPassLuhn() {
  // variable que guarde el número introducido
  const num = document.getElementById("cardnumber").value;
  
  alert("variable num:" + num);

  i = number.length - 1,
  //variable array el cual se ingresa lo guardado en la variable num, al arreglo. Se ordena al revés del numero ingresado

  num = replace(0);
      if (number.length !== 16) {
        return false;
      }
     // while (i >= 0) 
}
alert("variable array:" + array);

 
/*si el resultado se divive por 10 y el resto es 0 es verdadero

if (sum % 10 === 0) {
  return true; // o bien alert("Numero de tarjeta correcto!")
} else { 
  return false; // o bien alert("Numero de tarjeta incorrecto!")
}*/

/* Desplegar meses 
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  container.selectMes.appenndChild(opcion);
}

// Desplegar años
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  container.selectYear.appenndChild(opcion);
}
// Input número de tarjeta, guarda el valor del input
container.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  container.inputNumero.value = valorInput
    .replace(/\s/g, '') // elimina espacio sen blanco
    .replace(/\D/g, '')// elimina letras
    .replace(/([0-9]{4})/g, '$1 ')// Espacio cada 4 números
    .trim(); // elimina el último espacio

  inputNumero.textContent = valorInput;
})

// CCV
container.inputCvv.value = container.inputCvv.value
  .replace(/\s/g, '') // eliminar los espacios
  .replace(/\D/g, ''); // eliminar las letras

cvv.textContent = container.inputCvv.value;*/

// Input del nombre de tarjeta

/*function maskify(cc) {
return cc.split('').map((letter, idx) => idx < cc.length = 4 ? # : letter).join('');
}
	
/*} while (condition);
function luhn(value) {
  if (/[^0-9-\s]+/.test(value)) return false;// solo digitos y espacios
  let nCheck = 0, bEven = false; // si % no es 0 es falso
  value = value.replace(/\D/g, ""); // elimina letras
  for (let n = value.length - 1; n >= 0; n--) { // evalua el parametro y devuelve el valor
   
    let cDigit = value.charAt(n), // se devuelve en un nuevo string
      nDigit = parseInt(cDigit, 10); //comprueba el entero
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck += nDigit; bEven = !bEven;
  }
  
  return (nCheck % 10) === 0;
}






/* Validar con luhn
function fValidarTarjeta() {
  var option = $("#lstTipoTarjeta option:selected").val();
  codigo = $("#nro_tarjeta").val().replace('-', '');
  var msg = "Valor incorrecto";
  VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
  MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;




  Para proteger los datos
  if (typeof window.card === 'undefined') {
    window.card = window.card = card;
  } else console.log('5540 5000 0100 0004');
} ();*/

/* function array(a){
    for (let i = 0; i < cardNumber.lenght; i++)
      return (num);
    document.getElementById("num").innerHTML = a;
  }
  array(cardNumber);
   console.log(a);

//hacer el inverso en el array
  function inverso(reverso){
   let num = [num];
    for (let i = num.length - 1; i >= 0; i--)
      nun += reverso[i];
    return num;
  
}
  
/*function inverse(cardNumber) {
    let reversed = 0;
    let copiaCardNumber = cardNumber;

    while (cardNumber > 0) {
      reversed += reversed * 10;
      reversed += reversed + (cardNumber % 10);
      cardNumber = parseInt(cardNumber / 10);
    }
  }
    console.log(cardNumber);
  }
 */
// sumar las posiciones impares if((i+1)%2 == 0){}

/*  function maskify(""): (cardNumber)=> {

    const ult = cardNumber.substring(cardNumber.length - 4);
    const inc = cardNumber.substring(0,cardNumber.length - 4);
    const ocultar = inc.replace(/./g, "#") + ult;
    return ocultar;
  }

    function maskify(carNumber) {
   return carNumber.slice(0,-4).replace(/./g, '#');
 }

  maskify: function(cardNumber) {

    if (cardNumber.length > 4) {
      const hideNumbers = "#".repeat(cardNumber.length - 4);
      //devuelve un subconjunto de un objeto String 
      const showLastFour = cardNumber.substring(cardNumber.length - 4);
      const mask = hideNumbers + showLastFour;
      return mask;
    }
    else {
      return cardNumber;
    }
 
         //((resultMulti-(resultMulti % 10)) / 10) + (resultMulti % 10)

function prueba(number) {
         if (number >= 10) {
return ((number % 10) / 10 - 1) + (number % 10);
         console.log(prueba(23));



*/
/* convertir el string en array
// hacer el inverso en el array
// recorrer el inverso
// buscar las posiciones pares 
// multiplicarlas por 2
*/

/*if (cardNumberArrayInverso[i] >= 10) {
        suma =
          ((cardNumberArrayInverso[i] - (cardNumberArrayInverso[i] % 10)) / 10) +
          (cardNumberArrayInverso[i] % 10)*/
//.replace(/(\d{4})\s+(\d{4})/)

/*suma =
          [(cardNumberArray[i] - (cardNumberArray[i] % 10)) / 10] +
          (cardNumberArray[i] % 10)
        console.log(suma)*/

//if (i % 2 === 0) suma += cardNumberArray[i]
//resto = suma + (i + (1 % 2) === 1)
//console.log(resto)

//else para buscar las posiciones impares para agregarlas al array pares
//for (let i = 1 <= 9; ++1){
//if(i%2===1)
/*suma =
          [(cardNumberArray[i] - (cardNumberArray[i] % 10)) / 10] +
          (cardNumberArray[i] % 10)
        console.log(suma)*/
//suma += parseInt(cardNumberArrayInverso[i])

/*maskify: function numeroOculto(cardNumberArray) {
    return cardNumberArray.replace(/^[0-9]$/, '#').cardNumberArray.slice(-4, cardNumberArray.length)
  },
   function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
  }
}
si es numero
 function isNumeric(char) {
    return !isNaN(char - parseInt(char))
  }
  
  function maskify(numero) {
    numero = numero.toString()
    const acumulador = ''
    for (let i = 0; i < numero.length; i++) {
      if (i > 4) {
        const acumulador = acumulador + '#'
      }
    }
    return acumulador
  }
document.getElementById('cardNumberArray').value = maskify(cardNumberArray)
  function maskify(input) {
    return input.slice(0, -4).replace(/^[0-9]$/, '#') + input.slice(-4)
  }

  function maskify(mask) {
    return mask.replace(/.(?=.{4})/g, '#')
  }

   var cardNumberArray = ''
  var lastNumber = cardNumberArray.slice(-4)
  var mask = '#'
  var masked = mask.repeat(7) + lastNumber
  document.querySelector('').innerHTML = 'chequear el numero' + masked

  maskify: function(cardNumber) {
   const sinespacio=cardNumber.replace(/\s/g,"");
   
   let mask=sinespacio
   if (sinespacio.length<4){
      const cadena1=sinespacio.slice(0,-4).replace(/[\da-zA-Z]/g,"#")
      const cadena2=sinespacio.slice(-4)
      mask=cadena1+cadena2 
      return mask
   }
   return mask


     /*function maskify(enmascarar) {
    return enmascarar.replace(/.(?=.{4})/g, '#')
  }
  document.getElementById('cardNumber').value = maskify(cardNumberArray)
  function maskify(cardNumberArray) {
    return (
      cardNumberArray.slice(0, -4).replace(/^[0-9]$/, '#') +
      cardNumberArray.slice(-4)
    )
  }
    function maskify(cardNumberArray) {
    '#'.repeat(Math.max(0, cardNumberArray.length - 4)) +
      cardNumberArray.substr(-4)
  }
  
  */
