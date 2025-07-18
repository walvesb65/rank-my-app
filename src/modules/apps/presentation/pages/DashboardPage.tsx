import { useApps } from "../../application/contexts/AppsContext";
import { AppCard } from "../components/atoms/AppCard";
import { Layout, Spin, Alert, Row, Col } from "antd";

const { Content } = Layout;

export const DashboardPage = () => {
  const { state } = useApps();

  if (state.loading) return <Spin size="large" />;
  if (state.error) return <Alert message={state.error} type="error" />;

  return (
    <Layout>
      <Content style={{ padding: "24px" }}>
        <Row gutter={[16, 16]}>
          {state.apps.map((app) => (
            <Col key={app.id} xs={24} sm={12} md={8} lg={6}>
              <AppCard
                app={app}
                onClick={() => console.log("Selected app:", app)}
              />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};
