import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistPageHeaderComponent } from './mist-page-header.component';

describe('MistPageHeaderComponent', () => {
  let component: MistPageHeaderComponent;
  let fixture: ComponentFixture<MistPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
