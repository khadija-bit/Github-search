import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepFormComponent } from './deep-form.component';

describe('DeepFormComponent', () => {
  let component: DeepFormComponent;
  let fixture: ComponentFixture<DeepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
