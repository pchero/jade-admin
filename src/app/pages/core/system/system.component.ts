import { JadeService } from './../../../@core/data/jade.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor(private service: JadeService) { 
    console.log("Fired SystemComponent.");
  }

  ngOnInit() {
  }

}
