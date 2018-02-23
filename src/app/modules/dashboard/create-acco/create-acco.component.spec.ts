import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccoComponent } from './create-acco.component';

describe('CreateAccoComponent', () => {
  let component: CreateAccoComponent;
  let fixture: ComponentFixture<CreateAccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
