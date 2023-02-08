import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonMenu, IonToolbar } from '@ionic/angular';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class HeaderModule { }
