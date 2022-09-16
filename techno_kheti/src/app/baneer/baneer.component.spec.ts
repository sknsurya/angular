import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaneerComponent } from './baneer.component';

describe('BaneerComponent', () => {
  let component: BaneerComponent;
  let fixture: ComponentFixture<BaneerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaneerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
