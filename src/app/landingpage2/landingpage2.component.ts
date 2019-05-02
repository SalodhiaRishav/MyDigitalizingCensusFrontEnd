import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-landingpage2',
  templateUrl: './landingpage2.component.html',
  styleUrls: ['./landingpage2.component.css']
})
export class Landingpage2Component implements OnInit {
  public isDataFetched: boolean = false;
  constructor(private houseService: HouseService) { }

  public StateArray: Label[] = new Array('Andaman & Nicobar', 'Andhra Pradesh', "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");
  ngOnInit() {
    this.getPopulationCount().then((dataArray: number[]) => {
      console.log(dataArray);
      this.barChartLabels = this.StateArray;
      this.barChartType = 'bar';
      this.barChartLegend = true;

      this.barChartData = [
        { data: dataArray, label: 'Series A' },
      ];
      this.isDataFetched = true;
    })

  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };


  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartPlugins;

  public barChartData: ChartDataSets[];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getPopulationCount() {
    return new Promise(
      (resolve, reject) => {
        this.houseService.getPopulationByState().subscribe((populationCount) => {
          resolve(populationCount)
        })
      })
  }








}
