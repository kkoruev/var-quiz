import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesAndIconsComponent } from './badges-and-icons.component';

describe('BadgesAndIconsComponent', () => {
  let component: BadgesAndIconsComponent;
  let fixture: ComponentFixture<BadgesAndIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesAndIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesAndIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
