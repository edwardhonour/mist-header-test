import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistPageFooterComponent } from './mist-page-footer.component';

describe('MistPageFooterComponent', () => {
  let component: MistPageFooterComponent;
  let fixture: ComponentFixture<MistPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistPageFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
