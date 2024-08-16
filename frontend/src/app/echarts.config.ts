import { NgModule } from '@angular/core'
import { NgxEchartsModule } from 'ngx-echarts'
import * as echarts from 'echarts'

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({ echarts })
  ]
})
export class EchartsConfigModule { }