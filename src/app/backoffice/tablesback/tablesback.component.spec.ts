import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesbackComponent } from './tablesback.component';

describe('TablesbackComponent', () => {
  let component: TablesbackComponent;
  let fixture: ComponentFixture<TablesbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
