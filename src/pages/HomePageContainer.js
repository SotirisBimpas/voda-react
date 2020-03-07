import React, { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import Loader from '../components/Utils/Loader';

export default function HomePageContainer() {
  const [homeContent, setHomeContent] = useState();

  useEffect(
    () => {
      fetch('https://voda-react-assessment.herokuapp.com/home')
        .then(res => res.json())
        .then(res => setHomeContent(res[0]));
    },
    []
  );

  return (
    <>
      {homeContent
        ? (
          <HomePage
            description={homeContent.description}
            sections={homeContent.sections}
          />
        )
        : <Loader />
      }
    </>
  )
}