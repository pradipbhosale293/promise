import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  constructor(private mySer: DataService) { }

  ngOnInit(): void {
    const prom = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve("This is to be resolved");
        // reject('This is rejected');
      }, 4000)
    })

    prom.then((value)=>{
      console.log('promise is successfully executed '+value );
    }).catch((value)=>{
      console.log('Promise is not resolved '+ value)
    });

    this.getPromiseData();
  }

  getPromiseData(){
    this.mySer.getPromData()
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
