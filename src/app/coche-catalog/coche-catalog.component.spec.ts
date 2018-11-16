import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheCatalogComponent } from './coche-catalog.component';

describe('CocheCatalogComponent', () => {
  let component: CocheCatalogComponent;
  let fixture: ComponentFixture<CocheCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
