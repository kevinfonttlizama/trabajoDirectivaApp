import { Component } from '@angular/core';

export interface Entrada {
  titulo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = ""
  registrado=false;
  nombre:string = "";
  apellido:string = "";
  cargo:string="";
  entradas: Entrada[];

  

  constructor (){
    this.entradas= [
      {titulo:"Python cada dia mas presente"},
      {titulo:"Java es muy potente"},
      {titulo:"Me gusta mucho Angular"},
      {titulo:"Tambien me gusta CSS"},
      {titulo:"Como no gustarme Javascript"},

      
    ]
  }

  registrarUsuario() {

    this.registrado=true
    this.mensaje="usuario registrado con exito"
  }
}
