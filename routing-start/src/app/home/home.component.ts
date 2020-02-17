import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loadservers(){
    // complex calculation
    // this.router.navigate(['/servers']);
  }
  loadservers1(id:number){
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowaedit:'1'},fragment:'loading'});
  }
}
