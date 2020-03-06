import React, { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';

export default function HomePageContainer() {
  const [homeContent, setHomeContent] = useState();

  useEffect(
    () => {
      fetch('https://voda-react-assessment.herokuapp.com/home')
        .then(res => res.json())
        .then(res => {
          console.log(res[0]);
          setHomeContent(res[0]);
        });
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
        : '...loading'
      }
    </>
  )
}