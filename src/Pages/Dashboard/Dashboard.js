import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  chartOptions,
  latestOrders,
  topCustomers,
} from "../../assets/JsonData/ChartData";
import statusData from "../../assets/JsonData/status-card-data.json";
import Badge from "../../Components/Badge/Badge";
import StatusCard from "../../Components/StatusCard/StatusCard";
import Table from "../../Components/Table/Table";

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);
export default function Dashboard() {
  const themeReducer = useSelector((state) => state.themeReducer.mode);

  return (
    <div className="container">
      <h1 className="page-header">Dashboard</h1>
      <div className="row">
        <div className="col-6  col-md-8">
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
        <div className="col-6 col-md-4">
          <div className="card full-height">
            <Chart
              options={
                themeReducer === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card_header">
              <h3>top customers</h3>
            </div>
            <div className="card_body">
              {/* table */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card_footer">
              <Link to="/">viw all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card_header">
              <h3>latest orders</h3>
            </div>
            <div className="card_body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card_footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
