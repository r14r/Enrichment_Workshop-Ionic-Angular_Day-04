import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackButtonPage } from './back-button.page';

describe('BackButtonPage', () => {
  let component: BackButtonPage;
  let fixture: ComponentFixture<BackButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
