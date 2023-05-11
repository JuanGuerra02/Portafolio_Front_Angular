import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnumberComponent } from './barnumber.component';

describe('BarnumberComponent', () => {
  let component: BarnumberComponent;
  let fixture: ComponentFixture<BarnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarnumberComponent]
    });
    fixture = TestBed.createComponent(BarnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
