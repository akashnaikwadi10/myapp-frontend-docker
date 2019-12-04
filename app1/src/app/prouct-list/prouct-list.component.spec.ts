import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctListComponent } from './prouct-list.component';

describe('ProuctListComponent', () => {
  let component: ProuctListComponent;
  let fixture: ComponentFixture<ProuctListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuctListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
