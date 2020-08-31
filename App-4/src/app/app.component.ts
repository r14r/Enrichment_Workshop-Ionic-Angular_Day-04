import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'Master-Detail', url: '/master', icon: 'list' },
		{ title: 'Master-Detail: with Slider', url: '/master-with-slider', icon: 'list' }

		/*
		{ title: 'Game of Life', url: '/gameoflife', icon: 'game' },
		{ title: 'Tic Tac Toe: 1', url: '/tictactoe/1', icon: 'grid' },
		{ title: 'Chess: 1', url: '/chess/1', icon: 'list' },
		{ title: 'Chess: 2', url: '/chess/2', icon: 'list' },
		{ title: 'Chess: 3', url: '/chess/3', icon: 'list' },
		{ title: 'Chess: 4', url: '/chess/4', icon: 'list' },
		{ title: 'Chess: 5', url: '/chess/5', icon: 'list' },

		{ title: 'Master-Detail', url: '/master', icon: 'list' },
				*/
	];

	public appMenu = [
		{
			name: 'API Demos',
			items: [
				{ name: 'Action-sheet', url: 'demo/action-sheet', icon: 'list' },
				{ name: 'Alert', url: 'demo/alert', icon: 'alert' },
				{ name: 'Avatar', url: 'demo/avatar', icon: 'list' },
				{ name: 'Back-button', url: 'demo/back-button', icon: 'list' },
				{ name: 'Backdrop', url: 'demo/backdrop', icon: 'list' },
				{ name: 'Badge', url: 'demo/badge', icon: 'list' },
				{ name: 'Button', url: 'demo/button', icon: 'list' },
				{ name: 'Card', url: 'demo/card', icon: 'card' },
				{ name: 'Checkbox', url: 'demo/checkbox', icon: 'checkbox' },
				{ name: 'Chip', url: 'demo/chip', icon: 'list' },
				{ name: 'Content', url: 'demo/content', icon: 'list' },
				{ name: 'Datetime', url: 'demo/datetime', icon: 'list' },
				{ name: 'Fab', url: 'demo/fab', icon: 'list' },
				{ name: 'Grid', url: 'demo/grid', icon: 'grid' },
				{ name: 'Icon', url: 'demo/icon', icon: 'list' },
				{ name: 'Infinite-scroll', url: 'demo/infinite-scroll', icon: 'list' },
				{ name: 'Input', url: 'demo/input', icon: 'list' },
				{ name: 'Item', url: 'demo/item', icon: 'list' },
				{ name: 'Item-Sliding', url: 'demo/item-sliding', icon: 'list' },
				{ name: 'List', url: 'demo/list', icon: 'list' },
				{ name: 'Loading', url: 'demo/loading', icon: 'list' },
				{ name: 'Menu', url: 'demo/menu', icon: 'menu' },
				{ name: 'Modal', url: 'demo/modal', icon: 'list' },
				{ name: 'Nav', url: 'demo/nav', icon: 'list' },
				{ name: 'Note', url: 'demo/note', icon: 'list' },
				{ name: 'Picker', url: 'demo/picker', icon: 'list' },
				{ name: 'Popover', url: 'demo/popover', icon: 'list' },
				{ name: 'Progress-bar', url: 'demo/progress-bar', icon: 'list' },
				{ name: 'Radio', url: 'demo/radio', icon: 'radio' },
				{ name: 'Range', url: 'demo/range', icon: 'list' },
				{ name: 'Refresher', url: 'demo/refresher', icon: 'list' },
				{ name: 'Reorder', url: 'demo/reorder', icon: 'reorder' },
				{ name: 'Router-link', url: 'demo/router-link', icon: 'link' },
				{ name: 'Searchbar', url: 'demo/searchbar', icon: 'list' },
				{ name: 'Segment', url: 'demo/segment', icon: 'list' },
				{ name: 'Select', url: 'demo/select', icon: 'list' },
				{ name: 'Skeleton-text', url: 'demo/skeleton-text', icon: 'text' },
				{ name: 'Slides', url: 'demo/slides', icon: 'list' },
				{ name: 'Spinner', url: 'demo/spinner', icon: 'list' },
				{ name: 'Tabs', url: 'demo/tabs', icon: 'list' },
				{ name: 'Text', url: 'demo/text', icon: 'text' },
				{ name: 'Thumbnail', url: 'demo/thumbnail', icon: 'list' },
				{ name: 'Toast', url: 'demo/toast', icon: 'list' },
				{ name: 'Toggle', url: 'demo/toggle', icon: 'list' },
				{ name: 'Toolbar', url: 'demo/toolbar', icon: 'list' }
			]
		}
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	onClick(ev: any) {
		console.log('onClick', 'event=' + ev);
	}
}
