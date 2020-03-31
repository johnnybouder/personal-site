import { Component, OnInit } from '@angular/core';
import { CheeseService } from '../../services/cheese/cheese.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {

  public items: any = [];
  private subscription: any;
  
  constructor(public cheeseService : CheeseService) { }

  ngOnInit(): void {
    this.subscription = this.cheeseService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}