import React, { Component } from 'react'
import { Button, Collapse, Row, Col } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'

class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }


  render () {
    const { open } = this.state
    return (
      <div>
        <Button
          className='item-details-button'
          variant='link'
          onClick={() => this.setState({ open: !open })}
        >
          { open === false ? `See` : `Hide` } item details
          { open === false ? ` +` : ` -`} 
        </Button>
        <Collapse in={open}>
          <div>
            <Media>
              <div>
                <img 
                  width={100} 
                  height={100} 
                  alt='thumbnail'
                  src='https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
                />
              </div>
              <Media.Body>
                <p>Essentials by OFM ESS-3085 Racin Style Leather Chair, Red</p>
                <Row className='show-grid'>
                  <Col md={6}>
                    <strong> {`$ ${this.props.price}`} </strong>
                    <br />
                    <strong className='price-strike'> {`$ ${this.props.price}`} </strong>
                  </Col>
                  <Col md={6}> Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    )
  }
}


export default ItemDetails
