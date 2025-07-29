import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  return <h2>Recipe Details for Recipe #{id}</h2>;
};

export default RecipeDetail;
