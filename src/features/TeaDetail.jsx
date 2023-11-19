/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'reactstrap';
import defaultTeaImage from '../assets/teas.jpg';
import { capitalize } from '../util/formatData';

const TeaDetail = ({ teas, index }) => {
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
    return teas[index].image;
  };

  return (
    <>
      {teas && (
        <Container className="bg-brown rounded-3 p-3 mb-2">
          <Row xs="1" sm="2">
            <Col>
              <h1>{teas[index].name}</h1>
            </Col>
            <Col className="text-sm-end">
              <h2>Origin: {teas[index].origin}</h2>
            </Col>
          </Row>
          <Row xs="1" sm="2">
            <Col>
              <img
                className="detail-img rounded-3 my-2 w-100"
                src={isImage(teas[index].image)}
              />
            </Col>
            <Col className="mt-2 h5 align-self-center">
              {teas[index].tasteDescription && (
                <p>
                  <strong>Taste:</strong>{' '}
                  {capitalize(teas[index].tasteDescription)}
                </p>
              )}

              {teas[index].description && (
                <p>
                  <strong>Description:</strong> {teas[index].description}
                </p>
              )}

              {teas[index].type && (
                <p>
                  <strong>Tea Type:</strong> {capitalize(teas[index].type)}
                </p>
              )}

              {teas[index].caffeine && (
                <p>
                  <strong>Caffeine Amount: </strong>{' '}
                  {capitalize(teas[index].caffeine)}
                </p>
              )}

              {teas[index].caffeineLevel && (
                <p>
                  <strong>Caffeine Level: </strong>{' '}
                  {capitalize(teas[index].caffeineLevel)}
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Sources:</strong>
              {teas[index].sources && (
                <ul>
                  {teas[index].sources.map(source => {
                    if (source === '') {
                      return <li>No listed sources</li>;
                    }
                    return (
                      <li>
                        <a href={source} target="_blank" rel="noreferrer">
                          {source}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}

              {!teas[index].sources && (
                <ul>
                  <li>No listed sources</li>
                </ul>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TeaDetail;
