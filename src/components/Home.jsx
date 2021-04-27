import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
import items from '../data/menu.json'

// .map

const Home = () => (
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
                {/* <div class="col col-xs-12 col-md-6">
                        COL CONTENT
                    </div>
                */}
                <h1>Welcome to Strivestaurant</h1>
                <p>The best pasta dishes you can find on the web!</p>
                <Carousel interval={500}>
                    {
                        items.map(item => (
                            <Carousel.Item>
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
    </Container>
)

export default Home