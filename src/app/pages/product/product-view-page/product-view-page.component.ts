import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-view-page',
  standalone: true,
  imports: [],
  templateUrl: './product-view-page.component.html',
  styleUrl: './product-view-page.component.scss'
})
export class ProductViewPageComponent implements OnInit{

  constructor(private  activateRouter:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(res=>{
    let id= res.get('id')
      console.log(id)
    })
  }

}
