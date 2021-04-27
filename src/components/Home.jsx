import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import items from '../data/menu.json'
import DishComments from './DishComments'

// .map
// we need to work with the state object to keep track of which dish we selected
// but we cannot have the state object into a functional component
// for having a state we need a Class Component

// functional components are a touch faster

class Home extends React.Component {

    // let's declare the INITIAL state for my component
    state = {
        selectedDish: items[0]
    }

    // the parameter you pass to setState will always be an object
    // that object will be MERGED into the current state

    render() { // render is the ONLY REQUIRED method in a class component
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col xs={12} md={6}>
                        {/* <div class="col col-xs-12 col-md-6">
                                COL CONTENT
                            </div>
                        */}
                        <h1>Welcome to Strivestaurant</h1>
                        <p>The best pasta dishes you can find on the web!</p>
                        <Carousel>
                            {
                                items.map((item, index) => (
                                    // we need to let React know that all these carousel slides are different
                                    <Carousel.Item
                                        key={"pastadish-" + index}
                                        onClick={() => this.setState({ selectedDish: item })}
                                    >
                                        {/* the key is necessary for React's VIRTUAL DOM */}
                                        <img
                                            className="d-block w-100"
                                            src={item.image}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <DishComments dish={this.state.selectedDish} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home