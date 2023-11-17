/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'reactstrap';
import TeaCard from './TeaCard';

const TeasList = ({ teas }) => {
  return (
    <Container>
      <Row sm="2" lg="3">
        {teas &&
          teas.map((tea, key) => {
            return (
              <Col>
                <TeaCard tea={tea} key={key} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TeasList;
