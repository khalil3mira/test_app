import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any | undefined;
  onResultsChange: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {

    this.onResultsChange.subscribe(data => {
      this.results = data
      console.log(this.results)
    });

  }

  ngOnInit(): void {
  }

  searchSubmit(query: any) {
    this.http.get('https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations?search_type=city&search_value=' + query)
      .subscribe((data: any) => {
        this.onResultsChange.next(data.destinations);
      });
  }

}
