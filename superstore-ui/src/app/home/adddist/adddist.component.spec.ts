import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddistComponent } from './adddist.component';

describe('AdddistComponent', () => {
  let component: AdddistComponent;
  let fixture: ComponentFixture<AdddistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
