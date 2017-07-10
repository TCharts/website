import '../less/container.less';
import { Box, Bar, HBar, Table } from './tcharts.min.js';

const createClick = () => {
    const createBtn = document.getElementById('create');
    createBtn.onclick = handleClickCreate;
}

const handleClickCreate = () => {
    const input = document.querySelectorAll('#input textarea')[0];
    let str_value = input.value;
    str_value = str_value.replace(/[\r\n]/g, '');
    const json_value = JSON.parse(str_value);

    const chartType = document.getElementById('chart-type');
    console.log(typeof chartType.value)
    let chart;
    switch(chartType.value) {
      case '0':
        chart = new Bar(60,20);
        break;
      case '1':
        chart = new HBar(60,20);
        break;
      case '2':
        chart = new Table();
        break;
      case '3':
        chart = new Box(60,20);
        break;
      default:
        chart = new Bar(60,20);
    }

    chart.setData(json_value);

    const output = document.querySelectorAll('#output textarea')[0];
    output.value = chart.string();
}

createClick();
