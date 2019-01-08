import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeticionesService } from '../../services/peticiones.service';
import { Persona } from '../../services/persona';


/**
 * Generated class for the CrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
  providers:[ PeticionesService ]
})
export class CrearPage {
  public persona: Persona;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _peticionesService: PeticionesService) {
    this.persona = new Persona('','','');
  }

  onSubmit(form){
    this._peticionesService.addPersona(this.persona).subscribe(
      response=>{
        form.reset();
        alert(response.respuesta);
        
      },
      error=>{
        console.log(<any>error);
      });
  }

}
