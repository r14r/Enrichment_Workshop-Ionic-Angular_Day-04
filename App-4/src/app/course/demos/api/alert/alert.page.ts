import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
	constructor(public alertController: AlertController) {}

	ngOnInit() {}

	async showAlert() {
		const alert = await this.alertController.create({
			header: 'Use this lightsaber?',
			message: 'Do you agree to use this lightsaber to do good across the galaxy?',
			buttons: ['Disagree', 'Agree']
		});

		alert.present();
	}
}
