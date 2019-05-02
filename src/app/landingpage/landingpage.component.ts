import { Component, OnInit } from '@angular/core';
import { HouseService } from '../services/house.service';
import * as CanvasJS from './../../assets/scripts/canvasjs.min.js';
import { reject } from 'q';
import { promise } from 'protractor';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  public StateArray = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");

  constructor(private houseService: HouseService) { }
  ngOnInit() {
    this.getPopulationArray(this.StateArray).then((data: any) => {
      this.printChart(data)
    })  
  }


  getPopulationCount(state: string) {
    return new Promise(
      (resolve, reject) => {
        this.houseService.getPopulationByState(state).subscribe((populationCount) => {
          // chartArray.push({y:populationCount,label:this.StateArray[i]})
          resolve({ counts: populationCount })
        })
      })
  }

  getPopulationArray(array: any) {
    let chartArray = new Array();
    return new Promise((resolve, reject) => {
      for (const item of array) {
        console.log(item);
        this.getPopulationCount(item).then((data: any) => {
          chartArray.push({ y: data.counts, label: item })
        })


      }
      resolve(chartArray);
    })

  }


  printChart(dataArray: any[]) {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "State Population"
      },
      data: [{
        type: "column",
        dataPoints: dataArray
      }]
    });

    chart.render();
  }

  //   ngOnInit() {
  //     let arrLength = this.StateArray.length;
  //     for (let i = 0; i < arrLength; ++i)
  //     {
  //       this.houseService.getPopulationByState(this.StateArray[i]).subscribe((populationCount) => {
  //   console.log(populationCount);
  // })
  //     }

  //   }

}
