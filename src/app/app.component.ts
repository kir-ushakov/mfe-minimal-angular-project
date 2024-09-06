import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Declare the chart dimensions and margins.
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const svg = d3
      .select(this.elementRef.nativeElement)
      .select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .classed('testclass', true);

    // Declare the x (horizontal position) scale.
    const x = d3
      .scaleUtc()
      .domain([new Date('2023-01-01'), new Date('2024-01-01')])
      .range([marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - marginBottom, marginTop]);

    // Add the x-axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

    // Add the y-axis.
    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y));
  }

  ngOnDestroy(): void {
    d3.select(this.elementRef.nativeElement)
      .select('#chart')
      .selectAll('*')
      .remove();
  }
}
