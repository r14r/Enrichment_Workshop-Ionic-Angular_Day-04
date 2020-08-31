import { Component, OnInit, ViewChild } from '@angular/core';

import { DemoHelperService } from '../../services/helper.service';
import { DataService } from '../../services/data.service';
import { SlidesPageRoutingModule } from 'src/app/course/demos/api/slides/slides-routing.module';
import { IonItemSliding } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class MasterWithSliderPage implements OnInit {
	helper = new DemoHelperService('MasterPage');

	@ViewChild(IonItemSliding, { static: false }) slider: IonItemSliding;

	items: any;

	constructor(public dataService: DataService) {
		this.helper.log('constructor');

		this.items = dataService.getItems();

		this.helper.log('constructor', 'das hat funktonier');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');
	}

	onClick(slider, item) {
		this.helper.log(
			'onClick',
			'item=' + JSON.stringify(item) + 'slider=' + JSON.stringify(slider)
		);
		slider.close();
	}

	ionDrag() {
		this.helper.log('ionDrag');
	}

	ionSwipe() {
		this.helper.log('ionSwipe');
		this.slider.close();
	}

	share(item) {
		this.helper.log('share');
	}

	favorite(item) {
		this.helper.log('favorite');
	}

	unread(item) {
		this.helper.log('unread');
	}
}
