import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasdaqComponent } from './nasdaq.component';

describe('NasdaqComponent', () => {
  let component: NasdaqComponent;
  let fixture: ComponentFixture<NasdaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasdaqComponent]
    });
    fixture = TestBed.createComponent(NasdaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
