import { Anchor, Button, Card, Col, Divider, Input, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "./styles.less";
const { Search } = Input;

function Friend() {
  const onSearch = (value: string) => console.log(value);
  return (
    <>
      <div className="container friend_wrapper">
        <div className="findFr" id="findFr">
          <div className="findFr_top">
            <Search
              placeholder="Enter key word..."
              onSearch={onSearch}
              enterButton
            />
          </div>
          <div className="findFr_main">
            <Row gutter={[2, { xs: 6, sm: 12, md: 24, lg: 2, xl: 24 }]}>
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                className={"d-flex-center"}
              >
                <Card
                  hoverable
                  style={{ width: 240 }}
                  className={"card_custom"}
                  cover={
                    <img
                      className="avatar"
                      alt="avatar"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <div className="card_content">
                    <Button type="primary">Add friend</Button>
                    {/* <Button danger>Remove</Button> */}
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="findFr_bottom"></div>
        </div>
        <Divider />
        <div className="request" id="request">
          <h3 className="mb-2">Request add friend</h3>
          <Row gutter={[2, { xs: 6, sm: 12, md: 24, lg: 2, xl: 24 }]}>
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={"d-flex-center"}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                className={"card_custom"}
                cover={
                  <img
                    className="avatar"
                    alt="avatar"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <div className="card_content">
                  <Button type="primary">Accept</Button>
                  <Button danger>Remove</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <Divider />
        <h3 className="mb-2">Your friends</h3>
        <div className="yourFr" id="yourFr">
          <Row gutter={[2, { xs: 6, sm: 12, md: 24, lg: 2, xl: 24 }]}>
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={"d-flex-center"}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                className={"card_custom"}
                cover={
                  <img
                    className="avatar"
                    alt="avatar"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <div className="card_content">
                  <Meta title="Europe Street beat" className="mb-1" />
                  <Button danger>Remove</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Anchor
        className="anchor-friend"
        offsetTop={100}
        items={[
          {
            key: "findFr",
            href: "#findFr",
            title: "Find Friends",
          },
          {
            key: "request",
            href: "#request",
            title: "Request",
          },
          {
            key: "yourFr",
            href: "#yourFr",
            title: "Your Friends",
          },
        ]}
      />
    </>
  );
}

export default Friend;
