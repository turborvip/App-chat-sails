import { Button, Card, Col, Empty, Input, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import * as apiConfig from "../../services/apiConfig";
import localStorage from "../../utils/localStorage";

const { Search } = Input;

function FindFr() {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const user = localStorage.get("user");

  const onSearch = async (value: string) => {
    if (value && user?.id) {
      const payload = {
        search: value,
        userID: String(user?.id),
      };
      const res = await apiConfig.findFriend(payload);
      setData(res?.data);
    }
  };

  const handleAddFr = async (idFr: string) => {
    // socket.emit('add friend', { friendId: '12345' });
  }

  return (
    <div className="findFr" id="findFr">
        <h3>Find friend</h3>
      <div className="findFr_top">
        <Search
          placeholder="Enter key word..."
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className="findFr_main">
        {data.length !== 0 ? (
          <Row gutter={[2, { xs: 6, sm: 12, md: 24, lg: 2, xl: 24 }]}>
            {data.map((item: any) => (
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                className={"d-flex-center"}
                key={item.id}
              >
                <Card
                  hoverable
                  style={{ width: 240 }}
                  className={"card_custom"}
                  cover={
                    <img
                      className="avatar"
                      alt="avatar"
                      src={item?.avatar}
                      loading="lazy"
                    />
                  }
                >
                  <div className="card_content">
                  <Meta title={item?.name} className="mb-1" style={{textAlign:'center'}} />
                    {/* <Button type="primary" onClick={handleAddFr}>Add friend</Button> */}
                    {/* <Button danger>Remove</Button> */}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No data" />
        )}
      </div>
      <div className="findFr_bottom"></div>
    </div>
  );
}

export default FindFr;
