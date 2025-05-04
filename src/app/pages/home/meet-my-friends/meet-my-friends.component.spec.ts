import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetMyFriendsComponent } from './meet-my-friends.component';

describe('MeetMyFriendsComponent', () => {
  let component: MeetMyFriendsComponent;
  let fixture: ComponentFixture<MeetMyFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetMyFriendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetMyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
