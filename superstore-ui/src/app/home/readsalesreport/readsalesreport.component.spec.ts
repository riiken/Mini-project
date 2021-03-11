import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadsalesreportComponent } from './readsalesreport.component';

describe('ReadsalesreportComponent', () => {
  let component: ReadsalesreportComponent;
  let fixture: ComponentFixture<ReadsalesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadsalesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadsalesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
