/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TeaCard from './TeaCard';

const request = 'https://boonakitea.cyclic.app/api/all';

const TeasList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(request);
      const fetchedData = await response.json();
      // const filteredData = selectWorkingImages(fetchedData);
      setData(fetchedData);
    }
    getData();
  }, []);

  return (
    <Container>
      <Row sm="2" lg="3">
        {data &&
          data.map((tea, key) => {
            return (
              <Col key={key}>
                <TeaCard tea={tea} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TeasList;
