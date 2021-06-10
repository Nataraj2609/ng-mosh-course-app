import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPromisePipeComponent } from './async-promise-pipe.component';

describe('AsyncPromisePipeComponent', () => {
  let component: AsyncPromisePipeComponent;
  let fixture: ComponentFixture<AsyncPromisePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncPromisePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPromisePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
