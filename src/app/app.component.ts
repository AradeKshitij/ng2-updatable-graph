import { warn } from '@angular/compiler/testing/facade/lang';
import { Component, OnInit } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  data: any;
  options: any;
  reportGraph: any;

  ngOnInit(): void {
    let othis = this;
    this.canvas = document.getElementById('canvas-board') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');

    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Success",
          backgroundColor: "rgba(0,120,215,0.4)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Failed",
          backgroundColor: "rgba(200,0,10,0.4)",
          data: [15, 9, 8, 101, 36, 95, 30],
        }
      ]
    };

    othis.initGraph();
  }

  initGraph() {

    this.reportGraph = new Chart(this.context, {
      type: 'bar',
      data: this.data
    });

    console.log(this.reportGraph);

    this.updateGraph();

  }

  updateGraph() {
    let i = 0;
    for (let j of this.reportGraph.config.data.datasets[0].data) {
      this.data.datasets[0].data[i] = j + 10;
      i++;
    };
    i = 0;
    for (let j of this.reportGraph.config.data.datasets[1].data) {
      this.data.datasets[1].data[i] = j + 4;
      i++;
    };
    this.reportGraph.config.data.datasets[0].data = this.data.datasets[0].data;
    this.reportGraph.config.data.datasets[1].data = this.data.datasets[1].data;

    console.log(this.reportGraph.config.data.datasets[0].data);
    console.log(this.reportGraph.config.data.datasets[1].data);

    this.reportGraph.update();
  }

}
