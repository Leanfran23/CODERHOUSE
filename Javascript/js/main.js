alert("Bienvenido al mejor convertidor de Peso AR <=> Dolar del país!!");

const dolarOficial = 152.25;
const impuestoPais = 0.3;
const ganancias = 0.35;

let option = 0;
while (option !== '1' && option !== '2') {
    option = prompt("Ingrese opción deseada: [1 > Dolares a Pesos]    [2 > Pesos a Dolares]");

    if (option === '1') {
        let value = prompt("Ingrese valor de dolares a convertir");
        function convertir(dolar){
            let result = (dolar * dolarOficial);
            let totalResult = result + (result * impuestoPais) + (result * ganancias);
            return totalResult;
        }
        let dolarPeso = convertir(value);
        alert("El valor ingresado convertido a pesos es:  $ " + dolarPeso);

    } else if (option === '2') {
        let value = prompt("Ingrese valor de pesos a convertir");
        function convertir(peso){
            let result = (peso * 0.003980);
            return result;
        }
        let pesoDolar = convertir(value);
        alert("El valor ingresado convertido a dolares es:  u$s " + pesoDolar);
    
    } else alert("Entrada incorrecta. Por favor ingrese una opción válida: [1] ó [2]");
}

