import { Avatar, Collapse, TreeProps } from "antd";
import { DataNode } from "antd/es/tree";
import AntdIcon from "../../components/icons/AntdIcons";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  Known for its loyalty and faithfulness, it can be found as a welcome
  guest in many households across the world.
`;
function Detail() {
  return (
    <div className="detail_wrapper">
      <div className="detail_top">
        <div className="avatar">
          <Avatar src={null} size={"large"}></Avatar>
        </div>
        <div className="name">Title</div>
        <div className="status"> active</div>
      </div>
      <div className="detail_main">
        <Collapse defaultActiveKey={['1','3']}>
          <Panel header="Setting" key="1" className="setting">
            <div>{AntdIcon.EditOutlined} Rename</div>
            <div>{AntdIcon.PictureOutlined  } Change image</div>
            <div>{AntdIcon.FontSizeOutlined  } Edit nickname</div>
          </Panel>
          <Panel header="Member" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="Private and support" key="3">
           <div>{AntdIcon.ExportOutlined} Leave</div>
          </Panel>
        </Collapse>
      </div>
      <div className="detail bottom"></div>
    </div>
  );
}

export default Detail;
