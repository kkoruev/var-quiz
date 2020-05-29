import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyMComponent } from './typography-m.component';

describe('TypographyMComponent', () => {
  let component: TypographyMComponent;
  let fixture: ComponentFixture<TypographyMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
