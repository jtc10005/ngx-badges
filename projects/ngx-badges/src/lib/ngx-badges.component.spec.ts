import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBadgesComponent } from './ngx-badges.component';

describe('NgxBadgesComponent', () => {
  let component: NgxBadgesComponent;
  let fixture: ComponentFixture<NgxBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
