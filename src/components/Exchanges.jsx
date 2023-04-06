import React from 'react'
import { Card, Row, Col, Select } from 'antd';
import millify from 'millify'


const Exchanges = () => {
  const { Option } = Select

  return (
    <div>
        <Row gutter={[32, 32]}>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card title="Binance" extra={<img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="Binance Logo" width="30" />}>
            <p>Trade Volume: {millify(24)}</p>
            <p>Markets: {millify(100)}</p>
            <p>Change: {millify(5)}%</p>
          </Card>
        </Col>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card title="Kraken" extra={<img src="https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png" alt="Kraken Logo" width="30" />}>
            <p>Trade Volume: {millify(24)}</p>
            <p>Markets: {millify(50)}</p>
            <p>Change: {millify(-3)}%</p>
          </Card>
        </Col>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card title="Coinbase" extra={<img src="https://logowik.com/content/uploads/images/coinbase-new4201.jpg" alt="Coinbase Logo" width="30" />}>
            <p>Trade Volume: {millify(24)}</p>
            <p>Markets: {millify(20)}</p>
            <p>Change: {millify(2)}%</p>
          </Card>
        </Col>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={6}>
          <Card title="Bittrex" extra={<img src="https://searchvectorlogo.com/wp-content/uploads/2021/10/bittrex-inc-logo-vector.png" alt="Bittrex Logo" width="30" />}>
            <p>Trade Volume: {millify(24)}</p>
            <p>Markets: {millify(80)}</p>
            <p>Change: {millify(0)}%</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Exchanges