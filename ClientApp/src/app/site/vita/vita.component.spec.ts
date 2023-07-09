import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaComponent } from './vita.component';

describe('VitaComponent', () => {
  let component: VitaComponent;
  let fixture: ComponentFixture<VitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VitaComponent]
    });
    fixture = TestBed.createComponent(VitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
