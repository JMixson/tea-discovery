/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'reactstrap';
import TeaCard from './TeaCard';

const TeasList = ({ teas }) => {
  let teaIndex = -1;

  return (
    <Container>
      <Row sm="2" lg="3">
        {teas &&
          teas.map(tea => {
            teaIndex++;
            return (
              <Col>
                <TeaCard tea={tea} key={teaIndex} teaIndex={teaIndex} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TeasList;
