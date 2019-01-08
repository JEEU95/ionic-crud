import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PeticionesService } from '../../services/peticiones.service';
import { Persona } from '../../services/persona';



/**
 * Generated class for the ActualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualizar',
  templateUrl: 'actualizar.html',
  providers:[ PeticionesService ]
})
export class ActualizarPage {
  persona: any;
  public update: any;
  public id :number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _peticionesService: PeticionesService) {
    this.persona=navParams.get('persona');
    console.log(this.persona);
    this.update={
      "nombre": this.persona.nombre,
      "apellidos":this.persona.apellidos,
      "telefono":this.persona.telefono
    }
    this.id=this.persona.id;
    console.log(this.id);
  }

  onSubmit(form){
    this._peticionesService.updatePersona(this.update, this.id).subscribe(
      response=>{
        form.reset();
        alert('Se ingreso los datos de: '+response.nombre+' '+response.apellidos);
        
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  

}
