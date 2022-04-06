import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLiveDemoComponent } from './ngx-live-demo.component';

describe('NgxLiveDemoComponent', () => {
  let component: NgxLiveDemoComponent;
  let fixture: ComponentFixture<NgxLiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
