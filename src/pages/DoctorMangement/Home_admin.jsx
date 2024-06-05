import  { useState } from "react";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreOutlined,
  BorderlessTableOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/healmeet.png'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

import "../../styles/dashboards.1.1.0.min.css";
const { Content, Footer, Sider } = Layout;

const Home_admin = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="home_page home_admin">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              padding: "15px 0px",
              textAlign: 'center',
              fontWeight: "700",
              fontSize: "1vw",
              color: "white"
            }}
          >
            <NavLink to="/" className="custom-link">
            <img 
        src={logo} 
        alt="HealMeet Logo" 
        style={{ height: '40px', width: 'auto', transition: 'transform 0.3s ease', marginLeft:'20px' }}
        className="img-fluid"
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
      />

            </NavLink>
            <hr

              style={{
                backgroundColor: "White",
                margin: 0
              }}

            />
          </div>
          <Menu
            className="menu"
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
          >

            <Menu.Item key="home">
              <Link to={"/doctor-dashboard"}>
                <DashboardOutlined />
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to={"/doctor-dashboard/patients"}>
                <BorderlessTableOutlined />
                My patients
              </Link>
            </Menu.Item>
           
            <Menu.Item key="order">
              <Link to={"/doctor-dashboard/appointments"}>
                <ShoppingCartOutlined />
                Appointments
              </Link>
            </Menu.Item>
           
          

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="main_home" style={{ padding: 20, minHeight: 500, background: colorBgContainer }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <img 
        src={logo} 
        alt="HealMeet Logo" 
        style={{ 
          height: '40px', 
          width: 'auto', 
          transition: 'transform 0.3s ease, filter 0.3s ease', 
          filter: 'brightness(5) invert(4)' /* Invert the color to make it stand out */
        }}
        className="img-fluid"
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
      />
    </Footer>
        </Layout>
      </Layout>
    </div>
  )

}

export default Home_admin