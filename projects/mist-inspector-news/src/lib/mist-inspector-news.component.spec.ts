import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistInspectorNewsComponent } from './mist-inspector-news.component';

describe('MistInspectorNewsComponent', () => {
  let component: MistInspectorNewsComponent;
  let fixture: ComponentFixture<MistInspectorNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistInspectorNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistInspectorNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
