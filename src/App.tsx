import { AppsProvider } from "./modules/apps/application/contexts/AppsContext";
import { DashboardPage } from "./modules/apps/presentation/pages/DashboardPage";
import { ConfigProvider } from "antd";
import { antdTheme } from "./core/theme/antd.config";

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <AppsProvider>
        <DashboardPage />
      </AppsProvider>
    </ConfigProvider>
  );
}

export default App;
