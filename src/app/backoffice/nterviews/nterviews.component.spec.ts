import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NterviewsComponent } from './nterviews.component';

describe('NterviewsComponent', () => {
  let component: NterviewsComponent;
  let fixture: ComponentFixture<NterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NterviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
