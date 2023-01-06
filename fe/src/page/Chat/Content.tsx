import { Avatar, Button, Input } from "antd";
import AntdIcon from "../../components/icons/AntdIcons";

function Content() {
  return (
    <div className="content_wrapper">
      <div className="content_top">
        <div className="content_top-left">
          <div className="img">
            <Avatar size={"large"} src={null} />
          </div>
          <div className="title">
            Title
            <div className="status">active</div>
          </div>
        </div>
        <div className="content_top-right">
          <Button
            type={"primary"}
            shape={"circle"}
            icon={AntdIcon.PhoneFilled}
          />
          <Button
            type={"primary"}
            shape={"circle"}
            icon={AntdIcon.VideoCameraFilled}
          />
          <Button
            type={"primary"}
            shape={"circle"}
            icon={AntdIcon.InfoCircleFilled}
          />
        </div>
      </div>
      <div className="content_main">
        <div className="message_content you">
          <div className="avatar">
            <Avatar size={"small"} src={null} />
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nesciunt ut libero voluptatibus totam vel doloribus tempora fuga,
            voluptatum quibusdam accusamus temporibus dolor harum, aliquid
            ducimus unde itaque eligendi soluta.
          </div>
        </div>
        <div className="message_content me">
        <div className="avatar">
            <Avatar size={"small"} src={null} />
          </div>
          <div className="content">
            Thanks !
          </div>
        </div>
      </div>
      <div className="content_bottom">
        <div className="content_bottom-left"></div>
        <div className="content_bottom-center">
          <Input.Group compact>
            <Input
              style={{ width: "calc(100% - 31px)" }}
              placeholder="Your message"
            />
            <Button type="primary" icon={AntdIcon.SendOutlined} />
          </Input.Group>
        </div>
        <div className="content_bottom-right"></div>
      </div>
    </div>
  );
}

export default Content;
