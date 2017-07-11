import '../less/container.less';
import { Box, Bar, HBar, Table } from './tcharts.min.js';

let timer = null; // 定时器，定时刷新随机图表

const randomTableData = () => {
  // TODO
  return [
    ['id', 'name', 'birthday'],
    ['#1', 'xiaowei', '1992-08-01'],
    ['#2', 'hello', '1992-09-20'],
    ['#3', 'tcharts', '2017-06-27'],
    ['#4', 'world'],
  ];
};

const randomBoxData = () => {
  return [
    {value:100, name:'A'},
    {value:100, name:'B'},
    {value:100, name:'C'},
    {value:100, name:'Hello'},
  ];
};

const randomBarData = () => {
  return [
    {value:100, name:'A'},
    {value:45, name:'B'},
    {value:70, name:'C'},
    {value:30, name:'D'},
  ];
};

/**
 * 随机图表，并绘制到网页上
 */
const randomCharts = () => {
  const boxData = randomBoxData();
  const barData = randomBarData();
  const tableData = randomTableData();

  const bar = new Bar(40, 20);
  bar.setData(barData);
  const hbar = new HBar(40, 20);
  hbar.setData(barData);
  const box = new Box(40, 20);
  box.setData(boxData);
  const table = new Table(0.2);
  table.setData(tableData);

  document.querySelector('.chart.box pre').innerHTML = box.string();
  document.querySelector('.chart.bar pre').innerHTML = bar.string();
  document.querySelector('.chart.hbar pre').innerHTML = hbar.string();
  document.querySelector('.chart.table pre').innerHTML = table.string();
};

const randomChartTimer = () => {
  // 如果存在，清除定时
  if (timer) clearTimeout(timer);
  timer = setTimeout(randomCharts(), 3000);
};

randomChartTimer();

window.randomCharts = randomCharts;
