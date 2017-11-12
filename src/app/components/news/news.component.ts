import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NewsAPI} from 'newsapi';
import {newsAPI} from 'newsapi';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent implements OnInit {
    /*articles_1 = {
    id: '01',
    title: 'Cop, 2 suspected robbers shot during chase in Cape Town',
    author: 'The Person'
    }; //First Post*/
    posts: Post[];
  constructor(private dataService: DataService) {
  }

  /*showArticle() {
    this.http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=ef67bbc888aa460fad925c0383d2ff0b')
    .subscribe(
       (res: Response) => {
         const newsPost = res.json();
        console.log(newsPost);
       }
    );
  }*/

  ngOnInit() {
    this.dataService.getPost().subscribe((posts) => { //using a news article api
      console.log(posts);
      this.posts = posts;

    } );
  }

}

/*interface Post {
  id: number;
  description: string;
  body: string;
  title: string;
  userId: number;
}*/


interface Post {
  author: string,
  description: string,
  publishedAt: string,
  title: string,
  url: string,
  urlToImage: string
}