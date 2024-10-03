import { Component } from '@angular/core';
import { IonInput, AlertController } from '@ionic/angular';
import { PeopleService } from '../share/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public peopleSvc: PeopleService,
    private alertCtrl: AlertController // Inyectar el AlertController
  ) {}

  async onFavClicked(idx: number) {
    const people = this.peopleSvc.getAll();
    people[idx].isFav = !people[idx].isFav;
    this.peopleSvc.update(people[idx]);
  }

  async onDeleteClicked(idx: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas eliminar esta tarjeta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.peopleSvc.remove(this.peopleSvc.getAll()[idx]);
          }
        }
      ]
    });
    await alert.present();
  }

  // Método para manejar el clic del botón
  async submit(nameInput: IonInput, surnameInput: IonInput, ageInput: IonInput) {
    try {
      const nameElement = await nameInput.getInputElement();
      const surnameElement = await surnameInput.getInputElement();
      const ageElement = await ageInput.getInputElement();

      const name = nameElement.value;
      const surname = surnameElement.value;
      const age = ageElement.value;

      this.peopleSvc.add({
        name: name,
        surname: surname,
        age: age,
        isFav: undefined
      });

    } catch (error) {
      console.error('Error al obtener los valores:', error);
    }
  }
}
