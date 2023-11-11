/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import defaultTeaImage from '../assets/teas.jpg';

const request = 'https://boonakitea.cyclic.app/api/all';

const TeaCard = () => {
  const [data, setData] = useState(null);

  let randomIndex = 27;
  useEffect(() => {
    async function getData() {
      const response = await fetch(request);
      const fetchedData = await response.json();
      setData(fetchedData);
      // randomIndex = Math.floor(Math.random * data.length);
    }
    getData();
  }, []);

  const isImage = imageURL => {
    const brokenImage =
      'https://commons.wikimedia.org/wiki/File:Cup_of_black_tea.JPG#/media/File:Cup_of_black_tea.JPG';

    if (
      imageURL === undefined ||
      imageURL.includes('boonaki') ||
      imageURL === brokenImage
    ) {
      return defaultTeaImage;
    }
    return data[randomIndex].image;
  };

  return (
    <>
      {data && (
        <Container className="bg-brown rounded-3 p-3">
          <Row>
            <Col>
              <h1>{data[randomIndex].name}</h1>
            </Col>
            <Col className="text-end">
              <h2>Origin: {data[randomIndex].origin}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="detail-img rounded-3 my-2 w-100"
                src={isImage(data[randomIndex].image)}
              />
            </Col>
            <Col className="mt-2 h5 align-self-center">
              <p>
                <strong>Taste:</strong> {data[randomIndex].tasteDescription}
              </p>
              <p>
                <strong>Description:</strong> {data[randomIndex].description}
              </p>
              <p>
                <strong>Tea Type:</strong> {data[randomIndex].type}
              </p>
              <p>
                <strong>Caffeine Amount: </strong> {data[randomIndex].caffeine}
              </p>
              <p>
                <strong>Caffeine Level: </strong>{' '}
                {data[randomIndex].caffeineLevel}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Sources:</strong>
              <ul>
                {data[randomIndex].sources.map(source => {
                  return (
                    <li>
                      <a href={source} target="_blank" rel="noreferrer">
                        {source}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col className="align-self-end text-end">
              <strong>More Details </strong>
              <i className="fa fa-arrow-right"></i>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TeaCard;
