import { Card, CardBody, CardTitle } from 'reactstrap';
import defaultTeaImage from '../assets/teas.jpg';
import { Link } from 'react-router-dom';

const TeaCard = ({ tea, teaIndex }) => {
  const { image, name } = tea;

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
    return image;
  };

  return (
    <Card key={teaIndex} className="my-2">
      <Link to={`/${teaIndex}`}>
        <img className="card-img" src={`${isImage(image)}`} />
        <CardBody className="py-2 text-bg-secondary">
          <CardTitle tag="h4">{name}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
};

export default TeaCard;
