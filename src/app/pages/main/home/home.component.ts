import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { contentData } from '../../../data/content-data';
import { personalData } from '../../../data/personal-data';
import { programData } from '../../../data/programs-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //#region constructor

  constructor(private readonly alertController: AlertController) {

  }

  //#endregion

  //#region Public Property

  public personalData = personalData;
  public programData = programData;
  public contentData = contentData;
  public handlerMessage: string = '';
  public roleMessage: string = '';

  //#endregion

  //#region Public Methods

  public ngOnInit() {

  }

  public async onDevelopment(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Em desenvolvimento!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${ role }`;
  }

  //#endregion

}
