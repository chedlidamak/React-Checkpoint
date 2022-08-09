import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId='forEmail'>
                <Form.Label>Email Adress</Form.Label>
                <Form.Control type='email' placeholder='eample@email.com' />
                <Form.Text className='text-Muted'>
                  We'll never share your email adress, trust us!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId='forPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
                <Button variant='secondary' type='submit'>Login</Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Card className="mb-3" style={{color: "#000"}}>
          <Card.Img src="https://picsum.photos/200/50"/>
          <Card.Body>
            <Card.Title>
              Card example
            </Card.Title>
            <Card.Text>
              This is an example of a react bootsrtap
            </Card.Text>
            <Button variant='primary'>Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert>This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
