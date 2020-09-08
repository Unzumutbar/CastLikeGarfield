import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastSpellDialogPage } from './cast-spell-dialog.page';

describe('CastSpellDialogPage', () => {
  let component: CastSpellDialogPage;
  let fixture: ComponentFixture<CastSpellDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastSpellDialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastSpellDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
