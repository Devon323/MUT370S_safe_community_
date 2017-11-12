import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { DatasportService } from '../../services/datasport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sportposts: SportPost[];

  constructor(private datasportService: DatasportService) { }

  ngOnInit() {
    this.datasportService.getSportPost().subscribe((sportposts) => { //using a news article api
      console.log(sportposts);
      this.sportposts = sportposts;

    } );
  }

}

interface SportPost {
  author: string,
  description: string,
  publishedAt: string,
  title: string,
  url: string,
  urlToImage: string
}
