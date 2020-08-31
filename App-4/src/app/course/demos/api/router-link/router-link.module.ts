import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterLinkPageRoutingModule } from './router-link-routing.module';

import { RouterLinkPage } from './router-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLinkPageRoutingModule
  ],
  declarations: [RouterLinkPage]
})
export class RouterLinkPageModule {}
