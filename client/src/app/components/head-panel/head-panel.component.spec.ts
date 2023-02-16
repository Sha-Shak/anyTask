import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPanelComponent } from './head-panel.component';

describe('HeadPanelComponent', () => {
  let component: HeadPanelComponent;
  let fixture: ComponentFixture<HeadPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
