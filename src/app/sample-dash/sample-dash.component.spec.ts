import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDashComponent } from './sample-dash.component';

describe('SampleDashComponent', () => {
  let component: SampleDashComponent;
  let fixture: ComponentFixture<SampleDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
