import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import TeasList from '../src/features/TeasList';
import TeaDetail from '../src/features/TeaDetail';
import TeaButton from '../src/features/TeaButton';

const request = 'https://boonakitea.cyclic.app/api/all';

function App() {
  const [teas, setTeas] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(request);
      const fetchedTeas = await response.json();
      setTeas(fetchedTeas);
    }
    getData();
  }, []);

  return (
    <Container className="my-5">
      <TeaDetail teas={teas} index={5} />
      <TeaButton />
      <TeasList teas={teas} />
    </Container>
  );
}

export default App;
