import { Container } from 'reactstrap';
import TeasList from '../features/TeasList';
import TeaDetail from '../features/TeaDetail';
import TeaButton from '../features/TeaButton';

const HomePage = () => {
  return (
    <Container className="my-5">
      <TeaDetail />
      <TeaButton />
      <TeasList />
    </Container>
  );
};

export default HomePage;
