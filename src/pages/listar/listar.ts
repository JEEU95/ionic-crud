import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeticionesService } from '../../services/peticiones.service';
import { ActualizarPage } from '../actualizar/actualizar';
import { CrearPage } from '../crear/crear';
/**
 * Generated class for the ListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
  providers:[ PeticionesService ]
})
export class ListarPage implements OnInit{
  public personas: any;
  public delete: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _peticionesService: PeticionesService) {
    this.delete={
      "id" : ""
    }
  }

  ngOnInit() {
    this._peticionesService.getPersonas().subscribe(
      result=> {
        this.personas=result;
        console.log(this.personas);
    },
    error=>{
      console.log(<any>error)
    });
  }

  borrar(item){
    console.log(item)
    this._peticionesService.deletePersona(item.id).subscribe(
      response=>{
        alert(response.respuesta);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  editar(item){
    console.log(item);
    console.log("Datos****")
    this.navCtrl.push(ActualizarPage,{persona:item} )
  }
  agregar(){
    this.navCtrl.push(CrearPage)  
  }

}

