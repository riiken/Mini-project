import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfeedComponent } from './readfeed.component';

describe('ReadfeedComponent', () => {
  let component: ReadfeedComponent;
  let fixture: ComponentFixture<ReadfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
