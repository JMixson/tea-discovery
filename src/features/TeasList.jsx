/* eslint-disable react/jsx-key */
import { Row, Col } from 'reactstrap';
import TeaCard from './TeaCard';

const TeasList = ({ teas }) => {
  let teaIndex = -1;

  return (
    <Row xs="1" sm="2" lg="3">
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
  );
};

export default TeasList;
