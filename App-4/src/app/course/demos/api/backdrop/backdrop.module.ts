import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackdropPageRoutingModule } from './backdrop-routing.module';

import { BackdropPage } from './backdrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackdropPageRoutingModule
  ],
  declarations: [BackdropPage]
})
export class BackdropPageModule {}
