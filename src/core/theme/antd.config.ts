import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 4,
  },
  components: {
    Modal: {
      paddingMD: 16,
    },
  },
};
