import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const DatePoint = props.datePoint;
  console.log(props, "Chart");
  const dataPointValue = DatePoint.map((datepoint) => datepoint.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {DatePoint.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.key}
            value={datapoint.value}
            label={datapoint.label}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};
export default Chart;
