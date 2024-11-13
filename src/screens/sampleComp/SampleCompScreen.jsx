import "./sampleComp.scss";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import BasicLineChart from "../../components/charts/BasicLineChart";
import MixedBarChart from "../../components/charts/MixedBarChart";
import BasicPie from "../../components/charts/BasicPie";
import MuiColorTemplate from "../../components/charts/MuiColorTemplate";

const SampleCompScreen = () => {
  return (
    <div className="content-area">
    
    
   
      <section className="sample-component-charts">
      <div className="sample-bar-chart">
      <div className="sample-bar-chart-info">
        <h5 className="bar-chart-title">Total Revenue</h5>
        <div className="chart-info-data">
        
        <div className="info-data-value">$50.4K</div>
          <div className="info-data-text">
           
            <p>5% than last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper"> <MixedBarChart/></div>
    </div>
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Items</h4>
      </div>
      <div className="bar-chart-wrapper">
         <BasicPie/>
         </div>
    </div>
    </section>
   
    
      <section className="sample-component-section-2">

    </section>
    </div>
  );
};

export default SampleCompScreen;
