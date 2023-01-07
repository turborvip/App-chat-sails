import { Anchor, Button, Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import FindFr from "./FindFr";
import "./styles.less";

function Friend() {
  return (
    <>
      <div className="container friend_wrapper">
        <FindFr />
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
