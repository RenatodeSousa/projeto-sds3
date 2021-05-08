import Chart from 'react-apexcharts'
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {SaleSum} from "../../types/sale";

type ChatData = {
    labels: string[],
    series: number[]

}
const DonutChart = () => {

    //forma errada
    let chartData: ChatData = {labels: [], series: []};


    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(label => label.sellerName);
            const mySeries = data.map(serie => serie.sum);

            chartData = {labels: myLabels, series: mySeries}
        });


    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />

    );
}

export default DonutChart;
