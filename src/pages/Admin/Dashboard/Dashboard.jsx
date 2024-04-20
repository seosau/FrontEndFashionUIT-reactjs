import {
  BarChartBox,
  BigChartBox,
  ChartBox,
  PieChartBox,
  TopBox,
} from "../Charts";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "./data";
import style from "./Dashboard.module.scss";
import className from "classnames/bind";
const cx = className.bind(style);

const Dashboard = () => {
  return (
    <div className={cx("dashboard")}>
      <div className={cx("box", "box1")}>
        <TopBox />
      </div>
      <div className={cx("box", "box2")}>
        <ChartBox props={chartBoxUser} />
      </div>
      <div className={cx("box", "box3")}>
        <ChartBox props={chartBoxProduct}/>
      </div>
      <div className={cx("box", "box4")}>
        <PieChartBox />
      </div>
      <div className={cx("box", "box5")}>
        <ChartBox props={chartBoxConversion} />
      </div>
      <div className={cx("box", "box6")}>
        <ChartBox props={chartBoxRevenue} />
      </div>
      <div className={cx("box", "box7")}>
        <BigChartBox />
      </div>
      <div className={cx("box", "box8")}>
        <BarChartBox props={barChartBoxVisit} />
      </div>
      <div className={cx("box", "box9")}>
        <BarChartBox props={barChartBoxRevenue}/>
      </div>
    </div>
  );
  
};

export default Dashboard;
