//import validator from './validator.js'

// crear la funcionalidad
const buttonValidator = document.getElementById('botonconfirmar')
buttonValidator.addEventListener('click', () => {
  // tomar el valor de input del numero de la tarjeta
  const numeros = document.getElementById('cardNumber').value
  //console.log(numeros)

  //validar maskify, llamando el input
  document.getElementById('cardNumber').value = maskify(numeros)

  // convertir el string en array
  const cardNumberArray = numeros.split('')
  //console.log(cardNumberArray)

  // hacer el inverso en el array
  const cardNumberArrayInverso = cardNumberArray.reverse()
  //console.log(carNumbersArrayInverso)
  let suma = 0
  const pares = []

  // recorrer el inverso
  for (let i = 0; i < cardNumberArrayInverso.length; i++) {
    //console.log(i)

    // buscar las posiciones pares, los pares son inpares (al dividir no contiene resultados)
    if (i % 2 !== 0) {
      //console.log(cardNumberArrayInverso[i])

      // multiplicarlas por 2
      const multiplicacion = cardNumberArrayInverso[i] * 2
      //console.log(multiplicacion)

      // si el producto es mayor de 10 se separa y se suman para obtener un solo digito
      if (multiplicacion >= 10) {
        //console.log('paso por aqui' + multiplicacion)

        // transformar multiplicación convertir el arreglo en una cadena separada por una , y el string convertirlo en array
        const newArray = multiplicacion.toString().split('')
        //console.log(newArray)

        //sumando los digitos de la mutiplicacion y cambio el arreglo
        pares.push(parseInt(newArray[0]) + parseInt(newArray[1]))
        //console.log(pares)

        //sumar los numeros que resultan

        suma += pares.reduce((a, b) => a + b)
        //console.log(suma)
      } // cierra if compuesto
    } // cierra if de pares

    //else para buscar las posiciones impares para agregarlas al array pares
    for (const n of cardNumberArray) {
      suma += n
    }
  }

  if (suma % 10 === 0) {
    alert('Tarjeta Válida')
  } else {
    alert('Tarjeta Inválida')
  }

  function maskify(input) {
    return input.replace(/.(?=.{4})/g, '#')
  }
})

// console.log(validator;)
