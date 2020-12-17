import { Card, Col, Row } from 'antd';

const Card2 = ()=>{
    return(
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
          <Card title="Bio Card" >
            <p><b>Name:</b> Mohamed Khalaf</p>
            <p><b>Country:</b> Libya</p>
            <p><b>City:</b> Tripoli</p>
        </Card>
          </Col>
          <Col span={8}>
          <Card title="Bio Card" >
            <p><b>Name:</b> Mohamed Khalaf</p>
            <p><b>Country:</b> Libya</p>
            <p><b>City:</b> Tripoli</p>
        </Card>
          </Col>
          <Col span={8}>
          <Card title="Bio Card" >
            <p><b>Name:</b> Mohamed Khalaf</p>
            <p><b>Country:</b> Libya</p>
            <p><b>City:</b> Tripoli</p>
        </Card>
          </Col>
        </Row>
      </div>
        // <>
        // <Card title="Bio Card" >
        //     <p><b>Name:</b> Mohamed Khalaf</p>
        //     <p><b>Country:</b> Libya</p>
        //     <p><b>City:</b> Tripoli</p>
        // </Card>
        // </>
    )
}
export default Card2;