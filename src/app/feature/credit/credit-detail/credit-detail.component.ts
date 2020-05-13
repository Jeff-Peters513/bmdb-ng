import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title: string ="Credit-Detail";
  credit: Credit = new Credit();
  creditId: number = 0;




  constructor(private creditSvc: CreditService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      //get id from the router
      this.route.params.subscribe(parms => this.creditId = parms['id']);
      //get movie for that creditId
      this.creditSvc.get(this.creditId).subscribe(
        jr => {
          this.credit = jr.data as Credit;
          console.log("Credit found!", this.credit);
        });
    }
    delete() {
      this.creditSvc.delete(this.creditId).subscribe(jr => {
        if (jr.errors == null) {
          console.log(jr.data);
          this.router.navigateByUrl("/movie/list");
        }
        else {
          console.log("*****Error deleting credit.", this.creditId, jr.errors);
        }
      });
    }

}
