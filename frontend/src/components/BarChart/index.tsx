import Chart from 'react-apexcharts'
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {SalesSuccess} from "../../types/sale";
import {round} from "../../utils/format";

type SeriesData={
    name: string;
    data: number[];

}


type ChartData={
    labels:{
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData> ({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });


    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/success-by-saller`)
            .then(response => {
                const data = response.data as SalesSuccess[];
                const myLabels = data.map(label => label.sellerName);
                const mySeries = data.map(serie => round(100.0 * serie.deals /serie.visited,1));
                setChartData({
                    labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Success",
                        data: mySeries
                    }
                ]
            });
            });
    },[] );


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };



    return (
        <Chart
            options ={{...options, xaxis:chartData.labels}}
            series={chartData.series}
            type ="bar"
            height="240"
        />

    );
}

export default BarChart;
