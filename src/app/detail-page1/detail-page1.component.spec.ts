import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPage1Component } from './detail-page1.component';

describe('DetailPage1Component', () => {
  let component: DetailPage1Component;
  let fixture: ComponentFixture<DetailPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
