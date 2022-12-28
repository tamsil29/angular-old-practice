import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerDetailComponent } from './follower-detail.component';

describe('FollowerDetailComponent', () => {
  let component: FollowerDetailComponent;
  let fixture: ComponentFixture<FollowerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
