import React, { useState, useEffect } from 'react';
import SecondPage from '../components/SecondPage';
import Loader from '../components/Utils/Loader';

export default function SecondPageContainer() {
  const [secondPageContent, setSecondPageContent] = useState();

  useEffect(
    () => {
      fetch('https://voda-react-assessment.herokuapp.com/page')
        .then(res => res.json())
        .then(res => setSecondPageContent(res[0]));
    },
    []
  );

  return (
    <>
      {secondPageContent
        ? (
          <SecondPage
            description={secondPageContent.description}
            tiles={secondPageContent.tiles}
          />
        )
        : <Loader />
      }
    </>
  )
}