import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from './characterSlice';

const CharacterList = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((character, j) => (
        <div key={j}>{character.name}</div>
      ))}
    </div>
  );
};

export default CharacterList;
