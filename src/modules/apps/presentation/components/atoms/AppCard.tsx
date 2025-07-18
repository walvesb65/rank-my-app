import { Card, Tag } from "antd";
import { AppEntity } from "../../../domain/app.entity";

type AppCardProps = {
  app: AppEntity;
  onClick: () => void;
};

export const AppCard = ({ app, onClick }: AppCardProps) => (
  <Card
    title={app.name}
    hoverable
    onClick={onClick}
    extra={
      <Tag color={app.platform === "ios" ? "geekblue" : "green"}>
        {app.platform}
      </Tag>
    }
  >
    <p>Category: {app.category}</p>
  </Card>
);
