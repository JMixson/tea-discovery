import { useState, useEffect } from 'react';
import TeaDetail from '../features/TeaDetail';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import TeasList from '../features/TeasList';

const request = 'https://boonakitea.cyclic.app/api/all';

const TeaDetailPage = () => {
  const [teas, setTeas] = useState(null);
  const { index } = useParams();

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
      <TeaDetail teas={teas} index={index} />

      <TeasList teas={teas} />
    </Container>
  );
};

export default TeaDetailPage;
