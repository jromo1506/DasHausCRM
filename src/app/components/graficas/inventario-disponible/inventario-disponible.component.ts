import { Component } from '@angular/core';
import { NgxChartsModule,  Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-inventario-disponible',
  templateUrl: './inventario-disponible.component.html',
  styleUrls: ['./inventario-disponible.component.scss']
})
export class InventarioDisponibleComponent {

  single = [
    {
      "name": "disponible",
      "value": 50
    },
    {
      "name": "apartado",
      "value": 20
    },
    {
      "name": "contrato",
      "value": 10
    },
    {
      "name": "pendiente de entrega",
      "value": 3
    }
  ];

  view: [number, number]  = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Canal';
  showYAxisLabel = true;
  yAxisLabel = 'Leads';


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this.single)
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
