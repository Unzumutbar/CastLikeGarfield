import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomCardPage } from './random-card.page';

describe('RandomCardPage', () => {
  let component: RandomCardPage;
  let fixture: ComponentFixture<RandomCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
