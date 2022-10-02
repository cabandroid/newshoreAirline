import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFlightComponent } from './not-flight.component';

describe('NotFlightComponent', () => {
  let component: NotFlightComponent;
  let fixture: ComponentFixture<NotFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
