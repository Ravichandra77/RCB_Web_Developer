import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

}


  name = "Ravi Chandra";
  //Methods for Skills on every intervals
  defaultText = "I'm a ";
  skills = "Front-End Developer";
  ravi = setInterval(()=>{
    setTimeout(() => {
      this.skills = "UI Developer";
    }, 1500);
    setTimeout(() => {
      this.skills = "Angular Developer";
    }, 3000);
    setTimeout(() => {
      this.skills = "Front-End Developer"; 
    }, 4500);
   
  }, 4500);
}
