import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselIndex = 0;
  carouselFadeIndex = 0;
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  constructor() { }

  ngOnInit() {
  }

  next(){
    this.carouselIndex++;
    if(this.carouselIndex > 2){
      this.carouselIndex = 0;
    }
    var self = this;
    setTimeout(function(){
      self.carouselFadeIndex = self.carouselIndex;
    },50);
  }

  previous(){
    this.carouselIndex--;
    if(this.carouselIndex < 0){
      this.carouselIndex = 2;
    }
    var self = this;
    setTimeout(function(){
      self.carouselFadeIndex = self.carouselIndex;
    },50);

  }
}
