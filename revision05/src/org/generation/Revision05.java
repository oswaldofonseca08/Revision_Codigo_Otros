package org.generation;

/* ¿Que hace el siguiente codigo?
 * 
 * El siguente codigo lo interpreto como un juego logico, basicamente lee un valor 
 * proporcionado por el usuario el cuan debe de ser un numero de tipo entero (int), despues 
 * se comparara cada digito que conforma el numero ingresado con una serie de numeros ya 
 * establecidos los cuales son 3, 7, 8 & 9 para despues contar la cantidad de coincidencias
 * entre los digitos del numero ingresado y los numero establecidos, si el numero ingresado 
 * contiene mas digitos que coincidan con los numeros establecidos el programa mandara el 
 * mensaje de "El (nuemro ingresado) es un número afortunado." de lo contrario el mensaje 
 * mostrado sera "El (numero ingreado) no es un número afortunado.".
 * 
 * Ejemplo:
 * Numero ingresado = 31679;
 * 
 * El numero 31679 esta conformado por 5 digitos, de los cuales 3 (3, 7 & 9) coinciden con
 * los numero establecidos por lo cual el numero ingresado tiene 3 digitos coincidentes y 2 
 * no coincidentes 3 > 2 por lo tanto el numero 31679 es un numero afortunado.
 */

import java.util.InputMismatchException; // Se importan la clase InputMismatchException para el manejo de exepciones
import java.util.Scanner; // Se importa la clase Scanner

public class Revision05 {
    public static void main(String[] args) { // Se incerta el metodo main para poder ejecutar el programa
    	
        Scanner scn = new Scanner(System.in); 

        try {                               // Se coloca el codigo dentro de un bloque try catch para el manejo de exepciones
            System.out.print("Introduzca un número: ");
            
            int numero = scn.nextInt();     // Se renombran las variables para mayor entendimiento del codigo
            int contenedorNumero = numero;
            int numeroAfortunado = 0;
            int numeroNoAfortunado = 0;

            while (numero > 0) {
                int digito = numero % 10;
                
                if (digito == 3 || digito == 7 || digito == 8 || digito == 9) {
                    numeroAfortunado++;
                } else {
                    numeroNoAfortunado++;
                }
                numero /= 10;
            }

            if (numeroAfortunado > numeroNoAfortunado) {
                System.out.println("El " + contenedorNumero + " es un número afortunado.");
            } else {
                System.out.println("El " + contenedorNumero + " no es un número afortunado.");
            }
        } catch (InputMismatchException e) {  // Se utiliza catch para manejar la entrada de numeros no enteros u otros caracteres
            System.out.println("Por favor, introduzca un número válido."); // Se envia un mensaje en el caso de que el numero ingresado no sea valido
        } finally { // Se utiliza finaly para asegurar que el scaner se sierre independientemente del resultado del programa
            scn.close();
        }
    }
}
