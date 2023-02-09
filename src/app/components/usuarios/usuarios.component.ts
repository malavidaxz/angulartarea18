import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent  {

  // Creando el objeto que se enviara
  datos: User = {email:'', password:''}
  user:any;
  mostrar:boolean= false;
  // instancia servicios
  constructor(private servicio:  ServicesService){} 

  // Metodo post
  onSubmit(){
    this.mostrar = !this.mostrar;
    this.servicio.postUser(this.datos).subscribe(
      
      (usuario: User)=>{console.log(usuario),
      this.user = usuario;}
    )
  }

}
