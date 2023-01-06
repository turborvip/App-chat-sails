import { AutoComplete, Avatar, Button, Divider, Input, List } from "antd";
import { useEffect, useState } from "react";
import AntdIcon from "../../components/icons/AntdIcons";

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
      <div className="option_top_wrapper">
        <div className="option_top d-flex-center gap-2">
          <AutoComplete
            className="option_top-search"
            style={{ width: 200 }}
            options={props.dataFriends}
            placeholder="Search for messages..."
            filterOption={(inputValue, option: any) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            <Input suffix={AntdIcon.SearchOutlined} />
          </AutoComplete>
          <div className="option_top-btn d-flex gap">
            <div>
              <Button type="ghost" icon={AntdIcon.UserAddOutlined} />
            </div>
            <div>
              <Button type="ghost" icon={AntdIcon.UsergroupAddOutlined} />
            </div>
          </div>
        </div>
        <Divider />
      </div>
      <div className="option_main">
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={<div className={'list_item-description'}>{item.email}</div>}
              />
              <div className={'list_content'}>
                <div className="timestamp">49m</div>
                <div className="num_new_mes"><Button type={'primary'} shape={'circle'} size={'small'}>3</Button></div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Option;
