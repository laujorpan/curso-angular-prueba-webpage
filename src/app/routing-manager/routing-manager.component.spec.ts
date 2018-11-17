import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingManagerComponent } from './routing-manager.component';

describe('RoutingManagerComponent', () => {
  let component: RoutingManagerComponent;
  let fixture: ComponentFixture<RoutingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
