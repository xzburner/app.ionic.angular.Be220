import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserProxy } from '../../models/userProxy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //#region constructor

  constructor(private readonly alertController: AlertController) {

  }

  //#endregion

  //#region Public Property

  public handlerMessage: string = '';
  public roleMessage: string = '';
  public user: UserProxy = new UserProxy('Junio Souza', 'roxo');

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
