import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponentComponent } from './posts-component.component';

describe('PostsComponentComponent', () => {
  let component: PostsComponentComponent;
  let fixture: ComponentFixture<PostsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
