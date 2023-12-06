import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesListBooksComponent } from './pages-list-books.component';

describe('PagesListBooksComponent', () => {
  let component: PagesListBooksComponent;
  let fixture: ComponentFixture<PagesListBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesListBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
