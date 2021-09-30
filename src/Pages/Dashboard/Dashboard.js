import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { chartOptions } from "../../assets/JsonData/ChartData";
import statusData from "../../assets/JsonData/status-card-data.json";
import StatusCard from "../../Components/StatusCard/StatusCard";
export default function Dashboard() {
  return (
    <>
      <h1 className="page-header">Dashboard</h1>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusData.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card_header">
              <h3>top customers</h3>
            </div>
            <div className="card_body">{/* table */}</div>
            <div className="card_footer">
              <Link to="/">viw all</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
