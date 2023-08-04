import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperInfoComponent } from './developer-info.component';

describe('DeveloperInfoComponent', () => {
  let component: DeveloperInfoComponent;
  let fixture: ComponentFixture<DeveloperInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
