import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackdropPage } from './backdrop.page';

describe('BackdropPage', () => {
  let component: BackdropPage;
  let fixture: ComponentFixture<BackdropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackdropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
