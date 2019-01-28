import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSharedComponent } from './home-shared.component';

describe('HomeSharedComponent', () => {
  let component: HomeSharedComponent;
  let fixture: ComponentFixture<HomeSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
