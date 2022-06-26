import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import noUiSlider from "nouislider";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  
  constructor(private srvRouter: Router) {}

  scrollToDownload() {
    console.log('ay me toco el boton');
    //element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    let slider = document.getElementById("sliderRegular");
    

    try{

      noUiSlider.create(slider, {
        start: 40,
        connect: false,
        range: {
          min: 0,
          max: 100
        }
      });

    }catch(err){

      console.log("Error 1 controlado",err);

    }

    try{

      let slider2 = document.getElementById("sliderDouble");

      noUiSlider.create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });

    }catch(err2)
    {
      console.log("Error 2 controlado",err2);
    }


  }
  ngOnDestroy() {
   // var body = document.getElementsByTagName("body")[0];
   // body.classList.remove("index-page");
  }




  toGo(val: number){

    if(val === 1)
    {
      console.log('enjeñe');
      this.srvRouter.navigateByUrl('/landing');
    }
    else
    {
      console.log('enjeñe 2');
      this.srvRouter.navigateByUrl('/blog');
    }

  }
}
