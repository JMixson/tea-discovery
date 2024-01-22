import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'reactstrap';
import TeasList from '../features/TeasList';
import TeaDetail from '../features/TeaDetail';
import { useParams } from 'react-router-dom';
import { fetchTeas, selectAllTeas } from '../features/teasSlice';

function HomePage() {
  const { index } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeas());
  }, [dispatch]);

  const teas = useSelector(selectAllTeas);
  const isLoading = useSelector(state => state.teas.isLoading);
  const errMsg = useSelector(state => state.teas.errMsg);

  const [teaIndex, setTeaIndex] = useState(0);
  const [isDisplayingTea, setIsDisplayingTea] = useState(false);

  useEffect(() => {
    if (index) {
      setTeaIndex(index);
      setIsDisplayingTea(true);
    }
  }, [index]);

  function getRandomIndex() {
    setTeaIndex(Math.floor(Math.random() * teas.length));
    setIsDisplayingTea(true);
  }

  return (
    <Container className="my-5">
      {isDisplayingTea ? (
        <TeaDetail teas={teas} index={teaIndex} />
      ) : (
        <Container className="bg-brown rounded-3 extra-padding mb-2 text-center">
          <h1>Discover a new taste with an exciting new tea!</h1>
          <br />
          <i className="fa fa-arrow-down fa-2x"></i>
        </Container>
      )}

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
