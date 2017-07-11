import '../less/container.less';
import { Box, Bar, HBar, Table } from './tcharts.min.js';

let timer = null; // 定时器，定时刷新随机图表

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomTableData = () => {
  return [
    ['id', 'name', 'birthday'],
    ['#1', 'xiaowei', '1992-08-01'],
    ['#2', 'hello', '1992-09-20'],
    ['#3', 'tcharts', '2017-06-27'],
    ['#4', 'world'],
  ];
};

const randomData = () => {
  return [
    {value:getRandomInt(100, 50), name:'A'},
    {value:getRandomInt(100, 50), name:'B'},
    {value:getRandomInt(100, 50), name:'C'},
    {value:getRandomInt(100, 50), name:'D'},
  ];
};
/**
 * 随机图表，并绘制到网页上
 */
const randomCharts = () => {
  const data = randomData();
  const tableData = randomTableData();

  const bar = new Bar();
  bar.setData(data);
  const hbar = new HBar();
  hbar.setData(data);
  const box = new Box(40, 20);
  box.setData(data);
  const table = new Table(0.2);
  table.setData(tableData);

  document.querySelector('.chart.box pre').innerHTML = box.string();
  document.querySelector('.chart.bar pre').innerHTML = bar.string();
  document.querySelector('.chart.hbar pre').innerHTML = hbar.string();
  document.querySelector('.chart.table pre').innerHTML = table.string();
};

const randomChartTimer = () => {
  // 如果存在，清除定时
  randomCharts();
  setTimeout(randomChartTimer, 1000);
};

randomChartTimer();

window.randomCharts = randomCharts;
