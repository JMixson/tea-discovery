import { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import TeasList from '../features/TeasList';
import TeaDetail from '../features/TeaDetail';

const request = 'https://boonakitea.cyclic.app/api/all';

function HomePage() {
  const [teas, setTeas] = useState(null);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch(request);
      const fetchedTeas = await response.json();
      setTeas(fetchedTeas);
    }
    getData();
  }, []);

  function getRandomIndex() {
    setRandomIndex(Math.floor(Math.random() * 42));
  }

  return (
    <Container className="my-5">
      <TeaDetail teas={teas} index={randomIndex} />

      <div className="d-flex">
        <Button onClick={getRandomIndex} className="my-4 mx-auto py-2 border-0">
          Discover a New Tea
        </Button>
      </div>

      <TeasList teas={teas} />
    </Container>
  );
}

export default HomePage;
