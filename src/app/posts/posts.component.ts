import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../model/Posts';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts?: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  createPost(inputTitle: HTMLInputElement) {
    let post = { title: inputTitle.value };
    inputTitle.value = '';
    this.postsService.createPosts(post).subscribe(
      response => {
        console.log(response);
        this.posts?.splice(0, 0, response);
      });
  }

  getPosts() {
    this.postsService.getPosts().subscribe(
      response => {
        this.posts = response;
      });
  }
}
