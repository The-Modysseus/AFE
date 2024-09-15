import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTemperatureComponent } from './update-temperature.component';

describe('UpdateTemperatureComponent', () => {
  let component: UpdateTemperatureComponent;
  let fixture: ComponentFixture<UpdateTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTemperatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
