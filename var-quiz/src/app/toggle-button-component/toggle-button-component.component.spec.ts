import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonComponentComponent } from './toggle-button-component.component';

describe('ToggleButtonComponentComponent', () => {
  let component: ToggleButtonComponentComponent;
  let fixture: ComponentFixture<ToggleButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
