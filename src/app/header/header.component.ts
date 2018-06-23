import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showRightMenu = false;
  constructor() { }

  ngOnInit() {
  }

  toggleShowRightMenu(){
    this.showRightMenu = !this.showRightMenu;
  }
}
