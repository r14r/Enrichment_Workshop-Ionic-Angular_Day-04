import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterWithSliderRoutingModule } from './routing.module';
import { MasterWithSliderPage } from './page';
import { ComponentsDetailsModule } from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MasterWithSliderRoutingModule,
		ComponentsDetailsModule
	],
	declarations: [MasterWithSliderPage]
})
export class MasterWithSliderPageModule {}
