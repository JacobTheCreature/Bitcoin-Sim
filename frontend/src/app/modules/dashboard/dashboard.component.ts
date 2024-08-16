import { Component, OnInit } from '@angular/core'
import { BitcoinapiService } from '../../services/bitcoinapi.service'
import { BitcoinInfo } from '../../services/bitcoinapi.service'
import { CommonModule, NgIf } from '@angular/common'
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts'
import { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import { EchartsConfigModule } from '../../echarts.config'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgxEchartsDirective,
    CommonModule,
    EchartsConfigModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {

  public info: BitcoinInfo | undefined
  public chartOptions: any

  constructor(private bitcoinApiService: BitcoinapiService) {}

  ngOnInit(): void {
    this.bitcoinApiService.getBitcoinInfo().subscribe(data => {
      this.info = data
    })

    this.chartOptions = {
      title: {
        text: 'Example'
      },
      tooltip: {},
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      },
      yAxis: {},
      series: [
        {
          name: 'Example',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  }
}
