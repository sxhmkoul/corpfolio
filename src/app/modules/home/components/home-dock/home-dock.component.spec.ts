import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDockComponent } from './home-dock.component';

describe('HomeDockComponent', () => {
  let component: HomeDockComponent;
  let fixture: ComponentFixture<HomeDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
