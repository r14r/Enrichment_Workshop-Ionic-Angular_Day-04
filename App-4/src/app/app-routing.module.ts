import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () => import('./pages.base/home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'list',
		loadChildren: () => import('./pages.base/list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'gameoflife',
		loadChildren: () => import('./pages/gameoflife/module').then(m => m.GameOfLivePageModule)
	},
	{
		path: 'tictactoe/1',
		loadChildren: () => import('./pages/tictactoe1/module').then(m => m.TicTacToe1PageModule)
	},
	{
		path: 'chess/1',
		loadChildren: () => import('./pages/chess1/module').then(m => m.Chess1PageModule)
	},
	{
		path: 'chess/2',
		loadChildren: () => import('./pages/chess2/module').then(m => m.Chess2PageModule)
	},
	{
		path: 'chess/3',
		loadChildren: () => import('./pages/chess3/module').then(m => m.Chess3PageModule)
	},
	{
		path: 'chess/4',
		loadChildren: () => import('./pages/chess4/module').then(m => m.Chess4PageModule)
	},
	{
		path: 'chess/5',
		loadChildren: () => import('./pages/chess5/module').then(m => m.Chess5PageModule)
	},
	{
		path: 'masterdetails',
		loadChildren:
			'./course/learn-master-detail/pages/master/module#MasterDetailsMasterPageModule'
	},
	{
		path: 'masterdetail/:id',
		loadChildren:
			'./course/learn-master-detail/pages/detail/module#MasterDetailsDetailPageModule'
	},
	{
		path: 'master',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/master/module').then(m => m.MasterPageModule)
	},
	{
		path: 'detail',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/detail/module').then(m => m.DetailPageModule)
	},
	{
		path: 'detail/:id',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/detail/module').then(m => m.DetailPageModule)
	},
	{
		path: 'master-with-slider',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/master-with-slider/module').then(
				m => m.MasterWithSliderPageModule
			)
	},
	{
		path: 'demo/action-sheet',
		loadChildren: () =>
			import('./course/demos/api/action-sheet/action-sheet.module').then(
				m => m.ActionSheetPageModule
			)
	},
	{
		path: 'demo/alert',
		loadChildren: () =>
			import('./course/demos/api/alert/alert.module').then(m => m.AlertPageModule)
	},
	{
		path: 'demo/avatar',
		loadChildren: () =>
			import('./course/demos/api/avatar/avatar.module').then(m => m.AvatarPageModule)
	},
	{
		path: 'demo/back-button',
		loadChildren: () =>
			import('./course/demos/api/back-button/back-button.module').then(
				m => m.BackButtonPageModule
			)
	},
	{
		path: 'demo/backdrop',
		loadChildren: () =>
			import('./course/demos/api/backdrop/backdrop.module').then(m => m.BackdropPageModule)
	},
	{
		path: 'demo/badge',
		loadChildren: () =>
			import('./course/demos/api/badge/badge.module').then(m => m.BadgePageModule)
	},
	{
		path: 'demo/button',
		loadChildren: () =>
			import('./course/demos/api/button/button.module').then(m => m.ButtonPageModule)
	},
	{
		path: 'demo/card',
		loadChildren: () =>
			import('./course/demos/api/card/card.module').then(m => m.CardPageModule)
	},
	{
		path: 'demo/checkbox',
		loadChildren: () =>
			import('./course/demos/api/checkbox/checkbox.module').then(m => m.CheckboxPageModule)
	},
	{
		path: 'demo/chip',
		loadChildren: () =>
			import('./course/demos/api/chip/chip.module').then(m => m.ChipPageModule)
	},
	{
		path: 'demo/content',
		loadChildren: () =>
			import('./course/demos/api/content/content.module').then(m => m.ContentPageModule)
	},
	{
		path: 'demo/datetime',
		loadChildren: () =>
			import('./course/demos/api/datetime/datetime.module').then(m => m.DatetimePageModule)
	},
	{
		path: 'demo/fab',
		loadChildren: () => import('./course/demos/api/fab/fab.module').then(m => m.FabPageModule)
	},
	{
		path: 'demo/grid',
		loadChildren: () =>
			import('./course/demos/api/grid/grid.module').then(m => m.GridPageModule)
	},
	{
		path: 'demo/icon',
		loadChildren: () =>
			import('./course/demos/api/icon/icon.module').then(m => m.IconPageModule)
	},
	{
		path: 'demo/infinite-scroll',
		loadChildren: () =>
			import('./course/demos/api/infinite-scroll/infinite-scroll.module').then(
				m => m.InfiniteScrollPageModule
			)
	},
	{
		path: 'demo/input',
		loadChildren: () =>
			import('./course/demos/api/input/input.module').then(m => m.InputPageModule)
	},
	{
		path: 'demo/item',
		loadChildren: () =>
			import('./course/demos/api/item/item.module').then(m => m.ItemPageModule)
	},
	{
		path: 'demo/item-sliding',
		loadChildren: () =>
			import('./course/demos/api/item-sliding/module').then(m => m.ItemSlidingPageModule)
	},
	{
		path: 'demo/list',
		loadChildren: () =>
			import('./course/demos/api/list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'demo/loading',
		loadChildren: () =>
			import('./course/demos/api/loading/loading.module').then(m => m.LoadingPageModule)
	},
	{
		path: 'demo/menu',
		loadChildren: () =>
			import('./course/demos/api/menu/menu.module').then(m => m.MenuPageModule)
	},
	{
		path: 'demo/modal',
		loadChildren: () =>
			import('./course/demos/api/modal/modal.module').then(m => m.ModalPageModule)
	},
	{
		path: 'demo/nav',
		loadChildren: () => import('./course/demos/api/nav/nav.module').then(m => m.NavPageModule)
	},
	{
		path: 'demo/note',
		loadChildren: () =>
			import('./course/demos/api/note/note.module').then(m => m.NotePageModule)
	},
	{
		path: 'demo/picker',
		loadChildren: () =>
			import('./course/demos/api/picker/picker.module').then(m => m.PickerPageModule)
	},
	{
		path: 'demo/popover',
		loadChildren: () =>
			import('./course/demos/api/popover/popover.module').then(m => m.PopoverPageModule)
	},
	{
		path: 'demo/progress-bar',
		loadChildren: () =>
			import('./course/demos/api/progress-bar/progress-bar.module').then(
				m => m.ProgressBarPageModule
			)
	},
	{
		path: 'demo/radio',
		loadChildren: () =>
			import('./course/demos/api/radio/radio.module').then(m => m.RadioPageModule)
	},
	{
		path: 'demo/range',
		loadChildren: () =>
			import('./course/demos/api/range/range.module').then(m => m.RangePageModule)
	},
	{
		path: 'demo/refresher',
		loadChildren: () =>
			import('./course/demos/api/refresher/refresher.module').then(m => m.RefresherPageModule)
	},
	{
		path: 'demo/reorder',
		loadChildren: () =>
			import('./course/demos/api/reorder/reorder.module').then(m => m.ReorderPageModule)
	},
	{
		path: 'demo/router-link',
		loadChildren: () =>
			import('./course/demos/api/router-link/router-link.module').then(
				m => m.RouterLinkPageModule
			)
	},
	{
		path: 'demo/searchbar',
		loadChildren: () =>
			import('./course/demos/api/searchbar/searchbar.module').then(m => m.SearchbarPageModule)
	},
	{
		path: 'demo/segment',
		loadChildren: () =>
			import('./course/demos/api/segment/segment.module').then(m => m.SegmentPageModule)
	},
	{
		path: 'demo/select',
		loadChildren: () =>
			import('./course/demos/api/select/select.module').then(m => m.SelectPageModule)
	},
	{
		path: 'demo/skeleton-text',
		loadChildren: () =>
			import('./course/demos/api/skeleton-text/skeleton-text.module').then(
				m => m.SkeletonTextPageModule
			)
	},
	{
		path: 'demo/slides',
		loadChildren: () =>
			import('./course/demos/api/slides/slides.module').then(m => m.SlidesPageModule)
	},
	{
		path: 'demo/spinner',
		loadChildren: () =>
			import('./course/demos/api/spinner/spinner.module').then(m => m.SpinnerPageModule)
	},
	{
		path: 'demo/tabs',
		loadChildren: () =>
			import('./course/demos/api/tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'demo/text',
		loadChildren: () =>
			import('./course/demos/api/text/text.module').then(m => m.TextPageModule)
	},
	{
		path: 'demo/thumbnail',
		loadChildren: () =>
			import('./course/demos/api/thumbnail/thumbnail.module').then(m => m.ThumbnailPageModule)
	},
	{
		path: 'demo/toast',
		loadChildren: () =>
			import('./course/demos/api/toast/toast.module').then(m => m.ToastPageModule)
	},
	{
		path: 'demo/toggle',
		loadChildren: () =>
			import('./course/demos/api/toggle/toggle.module').then(m => m.TogglePageModule)
	},
	{
		path: 'demo/toolbar',
		loadChildren: () =>
			import('./course/demos/api/toolbar/toolbar.module').then(m => m.ToolbarPageModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			enableTracing: false,
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
