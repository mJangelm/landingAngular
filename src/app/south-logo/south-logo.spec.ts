import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthLogo } from './south-logo';

describe('SouthLogo', () => {
  let component: SouthLogo;
  let fixture: ComponentFixture<SouthLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SouthLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
