import { Component } from '@angular/core';
import { Estado } from './estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  nombre = "jose";
  carreras = ["mantto","tic","tu","ga","te"];
  estados = [
    new Estado(1,"Aguascalientes","AGS"),
    new Estado(2,"Baja California Norte","BCN"),
    new Estado(3,"Chiapas","CHP"),
    new Estado(4, "Durango", "DRG")
  ];
 
  visible = false;
  nom0=false;
  nom1=false;
  nom2=false;
  nom3=false;
  
  name: string  = "";
  leyenda:string = "";


  /**Declarar una función */
  mostrar(){
    if(!this.visible){
      this.visible = true;
      this.leyenda = "Activar";
    }else{

      this.visible = false;
      this.leyenda = "Desactivar";
    }
  }
}
