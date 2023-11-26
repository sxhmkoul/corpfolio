import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxNavbarComponent } from './linux-navbar.component';

describe('LinuxNavbarComponent', () => {
  let component: LinuxNavbarComponent;
  let fixture: ComponentFixture<LinuxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinuxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
