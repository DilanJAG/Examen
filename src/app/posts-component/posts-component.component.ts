import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrl: './posts-component.component.css'
})
export class PostsComponentComponent implements OnInit {
  constructor (private postService : PostService) {} 

 
  Data : any
 
  getData(){
    return this.postService.getData().subscribe
  }
  
  ngOnInit(): void {
    this.getData
  }

}




