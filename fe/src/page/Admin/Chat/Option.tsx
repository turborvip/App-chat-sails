import {
  Affix,
  AutoComplete,
  Avatar,
  Button,
  Divider,
  Input,
  List,
  Skeleton,
  Space,
  Tag,
} from "antd";
import { useEffect, useState } from "react";
import AntdIcon from "../../../components/icons/AntdIcons";

interface Props {
  dataFriends: any;
}

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

function Option(props: Props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div>
      <div className="option_top d-flex-center gap-2">
        <AutoComplete
          className="option_top-search"
          style={{ width: 200 }}
          options={props.dataFriends}
          placeholder="Search for friend"
          filterOption={(inputValue, option: any) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input suffix={AntdIcon.SearchOutlined} />
        </AutoComplete>
        <div className="option_top-btn d-flex gap">
          <div>
            <Button icon={AntdIcon.UserAddOutlined} />
          </div>
          <div>
            <Button icon={AntdIcon.UsergroupAddOutlined} />
          </div>
        </div>
      </div>
      <Divider />
      <div className="option_main">
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Option;
