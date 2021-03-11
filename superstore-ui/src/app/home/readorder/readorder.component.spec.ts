import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadorderComponent } from './readorder.component';

describe('ReadorderComponent', () => {
  let component: ReadorderComponent;
  let fixture: ComponentFixture<ReadorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
