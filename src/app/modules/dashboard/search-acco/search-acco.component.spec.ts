import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccoComponent } from './search-acco.component';

describe('SearchAccoComponent', () => {
  let component: SearchAccoComponent;
  let fixture: ComponentFixture<SearchAccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
