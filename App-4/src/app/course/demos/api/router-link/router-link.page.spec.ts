import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterLinkPage } from './router-link.page';

describe('RouterLinkPage', () => {
  let component: RouterLinkPage;
  let fixture: ComponentFixture<RouterLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouterLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
