import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistDataServiceComponent } from './mist-data-service.component';

describe('MistDataServiceComponent', () => {
  let component: MistDataServiceComponent;
  let fixture: ComponentFixture<MistDataServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistDataServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
