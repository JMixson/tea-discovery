/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'reactstrap';
import defaultTeaImage from '../assets/teas.jpg';

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
          <Row>
            <Col>
              <h1>{teas[index].name}</h1>
            </Col>
            <Col className="text-end">
              <h2>Origin: {teas[index].origin}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="detail-img rounded-3 my-2 w-100"
                src={isImage(teas[index].image)}
              />
            </Col>
            <Col className="mt-2 h5 align-self-center">
              {teas[index].tasteDescription && (
                <p>
                  <strong>Taste:</strong> {teas[index].tasteDescription}
                </p>
              )}

              {teas[index].description && (
                <p>
                  <strong>Description:</strong> {teas[index].description}
                </p>
              )}

              {teas[index].type && (
                <p>
                  <strong>Tea Type:</strong> {teas[index].type}
                </p>
              )}

              {teas[index].caffeine && (
                <p>
                  <strong>Caffeine Amount: </strong> {teas[index].caffeine}
                </p>
              )}

              {teas[index].caffeineLevel && (
                <p>
                  <strong>Caffeine Level: </strong> {teas[index].caffeineLevel}
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {teas[index].sources ||
                (teas[index].sources === '' && (
                  <>
                    <strong>Sources:</strong>
                    <ul>
                      {teas[index].sources.map(source => {
                        return (
                          <li>
                            <a href={source} target="_blank" rel="noreferrer">
                              {source}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default TeaDetail;
