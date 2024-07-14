import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Transactions } from 'src/app/_modals/transactions';
import { CustomerService } from 'src/app/_services/customer.service';
CustomerService
@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  @Input() transactions: Transactions[] = [];
  chart: Chart | null = null;
  constructor() { }
  ngOnInit(): void {
    this.chart.destroy()
  }

  ngAfterViewInit(): void {
    if (this.transactions.length > 0) {
      this.renderChart();
    }
  }

  ngOnChanges(): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart if it exists
    }
    if (this.transactions.length > 0) {
      this.renderChart();
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Ensure chart is destroyed when component is destroyed
    }
  }

  renderChart(): void {
    const labels = this.transactions.map(transaction => transaction.date);
    const data = this.transactions.map(transaction => transaction.amount);
    this.chart = new Chart('Transactions', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Transactions',
          data: data,
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
    });
  }

}

