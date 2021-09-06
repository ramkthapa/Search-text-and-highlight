import { SearchService } from './../service/search-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  list: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // this.searchSuggestion();
    this.searchService.searchData.forEach(data => {
      this.list = data.data;
    });
  }

  searchSuggestion(): void {
      this.searchService.getSearchSuggestion().subscribe(res => {
        console.log('data from api:', res);
      });
  }

}
