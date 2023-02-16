import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistDataResolverComponent } from './mist-data-resolver.component';

describe('MistDataResolverComponent', () => {
  let component: MistDataResolverComponent;
  let fixture: ComponentFixture<MistDataResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistDataResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistDataResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
