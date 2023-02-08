import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../components/header/header.module';
import { HomeModule } from './home/home.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IonicModule,
    RouterOutlet,
    HeaderModule,
  ]
})
export class MainModule { }
