import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, catchError, Observable, retry, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, AfterViewInit {

  private id: any;

  result: any | undefined;

  onResultChange: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });

    this.http.get('https://devapi.luckytrip.co.uk/api/2.0/top_five/destination?id=' + this.id)
      .subscribe((data: any) => {
        this.onResultChange.next(data);
      });
  }


  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this.onResultChange.subscribe(data=>{
      this.result = data
      console.log(this.result)
    })

  }

}
