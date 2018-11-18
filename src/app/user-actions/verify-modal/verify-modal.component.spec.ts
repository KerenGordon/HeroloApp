import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyModalComponent } from './verify-modal.component';


describe('ActionModalComponent', () => {
  let component: VerifyModalComponent;
  let fixture: ComponentFixture<VerifyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
