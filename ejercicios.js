// 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
// para valor 6
// 1
// 12
// 123
// 1234
// 12356

// para valor 3
// 1
// 12
// 123
function printPiramid(high) {
    if (high <= 0) {
        return "Altura no válida";
    }

    let data = "";
    for (let i = 1; i <= high; i++) {
        data += i;
        console.log(data);
    }
}
printPiramid(6);
printPiramid(3);

// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

// Ejemplo:
// Array1: ['rojo', 'azul', 'amarillo']
// Array2: ['blanco', 'negro', 'rojo']
// Resultado: ['rojo']

// Ejemplo 2:
// Array1: [4, 3, true, 'manzana']
// Array2: ['pera', 3, f alse, true, 3, true]
// Resultado: [3, true]
function intersectArray(array1, array2) {
    let result = [];
    let indexArray2;
    let indexResult;
    // recorrer el array 1
    for (const val of array1) {
        indexArray2 = array2.indexOf(val);
        indexResult = result.indexOf(val);
        // si el elemento del array 1
        // pertenece al array2 y no perternece al resultado, agregar el elemento
        if (indexArray2 >= 0 && indexResult < 0) {
            result.push(val);
        }
    }
    return result;
}

let result1 = intersectArray(['rojo', 'azul', 'amarillo'], ['blanco', 'negro', 'rojo'])
console.log(result1);

let result2 = intersectArray(
  [4, 3, true, 3, "manzana"],
  ["pera", 3, false, true, 3, true]
);
console.log(result2);

// 3)
// 3.1) Dado el siguiente objeto
// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }

// Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
// agregarProducto(nombre, precio, unidades) {
//     // Completar aca...

class Carrito {
    montoTotal = 0;
    productos = [];
    // a fin de respetar la estructura solicitada en el punto 3.1,
    // y segun lo solicitado en el punot 3.3, se agrega una propiedad tipo array para la unidades
    unidades = [];

    agregarProducto(nombre, precio, unidades) {
        let index = this.productos.indexOf(nombre);
        // no permitir productos duplicados
        if (index >= 0) {
            console.log(
                "ya existe " + nombre + " con " + this.unidades[index] + " unidades"
            );
            return;
        }

        this.productos.push(nombre);
        this.unidades.push(unidades);
        this.montoTotal += precio * unidades;
    }
}

// Ej:
// agregarProducto("Azucar", 5, 2);

// //Resultado esperado
// carrito = {
//     montoTotal: 20,
//     productos: ["Leche", "Azucar"]
// }

// 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”

let carrito = new Carrito();
// console.log(carrito);

carrito.agregarProducto("Leche", 5, 2);
// console.log(carrito);

carrito.agregarProducto("Azucar", 5, 2);
// console.log(carrito);

carrito.agregarProducto("Azucar", 5, 20);
console.log(carrito);
