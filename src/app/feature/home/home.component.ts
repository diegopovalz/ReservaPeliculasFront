import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TRMResponse } from './shared/model/trm';
import { TrmService } from './shared/service/trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public trm: TRMResponse

  constructor(protected trmService: TrmService) { }

  ngOnInit() {
    this.conseguirTRM();
  }

  private conseguirTRM(): void {
    this.trmService.conseguirTRM().subscribe((res: TRMResponse) => {
      this.trm = res
    }, (err: HttpErrorResponse) => {
      console.error(err)
    })
  }

}
