
import java.util.Scanner;

public class Codigo4 {
	
	
	
	public static void main (String[] args) {
		// TODO Auto-generated method stub
			
			Scanner scan=new Scanner(System.in);
		    
		    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		    String j1 = scan.nextLine();
		    
		    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
		  
		    String j2 = scan.nextLine();
		   
		    
		    scan.close();
   
    if (j1.equals(j2)) {
      System.out.println("Empate");
      
    } else {
      int g = 0;
      switch(j1) {
      
        case "piedra":
        	
          if (j2.equals("tijeras")) {
            g = 1;
            break;
            
          }else if (j2.equals("papel")) {
        	  g = 2;
        	  break;
          }
          
        case "papel":
          if (j2.equals("piedra")) {
            g = 1;
            break;
            
          } else if (j2.equals("tijeras")) {
        	  g = 2;
        	  break;
          }
        case "tijeras":
          if (j2.equals("papel")) {
            g = 1;
            break;
            
          }else if (j2.equals("piedra")) {
        	  g = 2;
        	  break;
          }
          
        default:
        	  System.out.println("Introduzca un nombre valido");
        	break;
      } 
      System.out.println("Gana el jugador " + g);
    } //else
  
    }//main
	
}//class Codigo4