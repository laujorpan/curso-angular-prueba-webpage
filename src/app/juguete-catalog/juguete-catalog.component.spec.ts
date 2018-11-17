import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteCatalogComponent } from './juguete-catalog.component';

describe('JugueteCatalogComponent', () => {
  let component: JugueteCatalogComponent;
  let fixture: ComponentFixture<JugueteCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugueteCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
