import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import SearchInput from "./SearchInput";
import defaultProps from "./defaultProps";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PageContainer,
  ProConfigProvider,
  ProLayout,
  ProSettings,
} from "@ant-design/pro-components";
import {
  NotificationFilled,
  GithubFilled,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import localStorage from "../../../utils/localStorage";
import AntdIcon from "../../../components/icons/AntdIcons";
import { Button, Popover } from "antd";
import ListFriend from "./ListFriends/ListFriend";

type MyComponentProps = React.PropsWithChildren<{}>;
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: MyComponentProps) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
  });

  const navigate = useNavigate();
  let location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const userInfo = localStorage.get("user");

  useEffect(() => {
    navigate(pathname);
  }, [pathname]);

  const headerTitle = (logo: any, title: any, _: any) => {
    const defaultDom = (
      <a>
        {logo}
        {title}
      </a>
    );
    if (document.body.clientWidth < 1400) {
      return defaultDom;
    }
    if (_.isMobile) return defaultDom;
    return (
      <>
        {defaultDom}
        <MenuCard />
      </>
    );
  };

  const menuFooter = (props: any) => {
    if (props?.collapsed) return undefined;
    return (
      <div
        style={{
          textAlign: "center",
          paddingBlockStart: 12,
        }}
      >
        <div>© 2023 Made with love</div>
        <div>by Turborvip</div>
      </div>
    );
  };

  const menuItem = (item: any, dom: any) => (
    <div onClick={() => setPathname(item?.path)}>{dom && dom}</div>
  );

  const actionHeader = (props: any) => {
    if (props.isMobile) return [];
    return [
      props.layout !== "side" && document.body.clientWidth > 1400 ? (
        <SearchInput />
      ) : undefined,
      <Popover placement="bottomRight" content={<ListFriend />} trigger="click">
        <Button
          type="ghost"
          icon={AntdIcon.UsergroupAddOutlined}
          style={{ color: "#878787" }}
        />
      </Popover>,
      <NotificationFilled key="NotificationFilled" />,
      <GithubFilled key="GithubFilled" />,
    ];
  };

  const handleListFriends = () => {};

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
          {...defaultProps}
          title="Turborvip"
          headerTitleRender={headerTitle}
          menuFooterRender={menuFooter}
          menuItemRender={menuItem}
          location={{ pathname }}
          siderMenuType="group"
          menu={{ collapsedShowGroupTitle: true }}
          avatarProps={{
            src: userInfo?.avatar,
            size: "small",
            title: userInfo?.name,
          }}
          actionsRender={actionHeader}
          onMenuHeaderClick={(e) => console.log(e)}
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
