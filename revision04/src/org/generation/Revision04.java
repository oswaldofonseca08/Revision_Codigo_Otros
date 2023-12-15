package org.generation;

import java.util.Scanner;

/**
 * El Codigo consiste en un juego simple de piedra papel o tijeras 
 * se declaran 2 objetos de tipo scaner que obtendran sus valores desde la consola
 * y se almacenan en 2 variables de tipo string llamadas j1 y j2
 * despues compara los valores a travez de if-else y switch para declarar un empate
 * o en su defecto, ganador al jugador 1 o 2;
 */
public class Revision04 {

	public static void main(String[] args) {
		// Se declaran correctamente los dos objetos de tipo Scanner
		Scanner scan = new Scanner(System.in);
		Scanner scan2 = new Scanner(System.in);

		System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		String j1 = scan.nextLine();

		System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
		String j2 = scan2.nextLine();
		
		//Se sierran los scanner una vez que ya no se utilizan 
		scan.close(); 
		scan2.close();

		// Se cambia el operador "==" por el metodo "equals()" para comparar objetos
		if (j1.equals(j2)) {
			System.out.println("Empate");
		} else {
			int g = 2;
			switch (j1) {
			case "piedra":
				if (j2.equals("tijeras")) {
					g = 1;
				}
				break;
			case "papel":
				if (j2.equals("piedra")) {
					g = 1;
				}
				break;
			case "tijeras":
				if (j2.equals("papel")) {
					g = 1;
				}
				break;
			default:
			}
			System.out.println("Gana el jugador " + g);
		}

	}

}
