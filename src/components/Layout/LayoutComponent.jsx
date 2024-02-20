import { useCallback, useContext, useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;

import {
  // Route,
  Link,
  // Router,
  // RouterProvider,
  // Outlet,
  // BrowserRouter,
} from "react-router-dom";

import RouteList from "../../routes/index";
import useFetch from "../../customeHooks/useFetch";
import ContextApp from "../../contexts/ContextApp";

const LayoutComponent = () => {
  const WEATHER_API_BASE = `https://api.weatherapi.com/v1/current.json?q=santo domingo&key=`;

  const NEWS_API_BASE = `https://newsapi.org/v2/everything?q=keyword&apiKey=`;

  const weatherFetched = useFetch(
    WEATHER_API_BASE + import.meta.env.VITE_WEATHER_API_KEY
  );
  const newsFetched = useFetch(
    NEWS_API_BASE + import.meta.env.VITE_NEWS_API_KEY
  );

  const { setWeatherData } = useContext(ContextApp);

  const { setNewsData } = useContext(ContextApp);

  const handleWeatherFetch = useCallback(() => {
    const { data } = weatherFetched;
    setWeatherData(data);
    console.log("llamando a weather api...");
  }, [setWeatherData, weatherFetched]);

  useEffect(() => {
    handleWeatherFetch();
  }, [handleWeatherFetch]);

  const handleNewsFetch = useCallback(() => {
    const { data } = newsFetched;
    setNewsData(data);
    console.log("llamando a news api... ");
  }, [setNewsData, newsFetched]);

  // const memoizedNews = useCallback(() => {
  //   setNewsData(newsFetched);
  // }, [newsFetched,setNewsData]);

  useEffect(() => {
    handleNewsFetch();
  }, [handleNewsFetch]);

  // useEffect(() => {
  //   memoizedNews();
  // }, [memoizedNews]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ width: "2rem" }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            style={{ padding: "0.7rem" }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <Link to="/clima">
                    <i
                      style={{ fontSize: "1.7rem" }}
                      className="ri-heavy-showers-line"
                    ></i>
                  </Link>
                ),
                label: "Clima",
              },
              {
                key: "2",
                icon: (
                  <Link to="/noticias">
                    <i
                      style={{ fontSize: "1.7rem" }}
                      className="ri-news-line"
                    ></i>
                  </Link>
                ),
                label: "Noticias",
              },
              {
                key: "3",
                icon: (
                  <Link to="/">
                    <i
                      style={{ fontSize: "1.7rem" }}
                      className="ri-settings-5-line"
                    ></i>
                  </Link>
                ),
                label: "Configuración",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Link style={{ fontSize: "1.3rem" }} to="/">
              Clima-Noticias
            </Link>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY: "scroll",
              overflowx: "hidden",
            }}
          >
            <RouteList />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponent;
