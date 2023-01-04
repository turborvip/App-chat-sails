import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import {
  PageContainer,
  ProConfigProvider,
  ProLayout,
  ProSettings,
  SettingDrawer,
} from "@ant-design/pro-components";

type MyComponentProps = React.PropsWithChildren<{}>;
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: MyComponentProps) => {

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  });

  return (
    <div
      id="pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...settings}
        >
          <PageContainer>
            <div className="content">{children}</div>
          </PageContainer>
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};

export default DefaultLayout;
