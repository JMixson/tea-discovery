import { Card, CardBody, CardTitle } from 'reactstrap';
import defaultTeaImage from '../assets/teas.jpg';

const TeaCard = ({ tea, key }) => {
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
    <Card key={key} className="my-2">
      <img className="card-img" src={`${isImage(image)}`} />
      <CardBody className="py-2 text-bg-secondary">
        <CardTitle tag="h4">{name}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default TeaCard;
