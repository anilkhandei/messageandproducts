import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageandproductsComponent } from './messageandproducts.component';

describe('MessageandproductsComponent', () => {
  let component: MessageandproductsComponent;
  let fixture: ComponentFixture<MessageandproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageandproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageandproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
