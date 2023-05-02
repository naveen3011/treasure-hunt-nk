import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function footer() {
  return (
    <div>
        <footer >
            <Container fluid>
            <Row >
            <Col className="bg-dark text-white text-center py-4">
                Copyright &copy; Treasure-Hunt by Naveen kushwaha
            </Col>
            </Row>
        </Container>
        </footer>
    </div>
    

  )
}

export default footer
