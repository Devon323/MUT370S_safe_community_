import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewsformComponent } from './usernewsform.component';

describe('UsernewsformComponent', () => {
  let component: UsernewsformComponent;
  let fixture: ComponentFixture<UsernewsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernewsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernewsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
