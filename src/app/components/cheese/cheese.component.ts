import { Component, OnInit } from '@angular/core';
import { CheeseService } from '../../services/cheese/cheese.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent implements OnInit {

  items: any = [];
  
  constructor(private cheeseService : CheeseService) { }

  ngOnInit(): void {
    this.cheeseService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}