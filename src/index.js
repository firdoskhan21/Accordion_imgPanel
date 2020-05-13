import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Menu } from "antd";
import {
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: "100%" }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <AreaChartOutlined />
              <span>Area Chart</span>
            </span>
          }
        >
          {/* <Menu.Item key="1" style={{    height: '173px'}}> */}
          <div style={{ padding: "10px 40px" }}>
            <img
              style={{ marginRight: "20px" }}
              src="https://www.d3-graph-gallery.com/img/section/Line150.png"
              alt="chart"
            />
            <img
              style={{ marginRight: "20px" }}
              src="https://www.d3-graph-gallery.com/img/section/Area150.png"
              alt="chart"
            />
            <img
              style={{ marginRight: "20px" }}
              src="https://www.d3-graph-gallery.com/img/section/StackedArea150.png"
              alt="chart"
            />

            <img
              style={{ marginRight: "20px" }}
              src="https://www.d3-graph-gallery.com/img/section/Stream150.png"
              alt="chart"
            />
          </div>

          {/* </Menu.Item> */}
        </SubMenu>
        <SubMenu key="sub2" icon={<PieChartOutlined />} title="Pie Chart">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<BarChartOutlined />} title="Column CHart">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

ReactDOM.render(<Sider />, document.getElementById("container"));
