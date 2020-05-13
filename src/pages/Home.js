import React from 'react';
import Button from '@material-ui/core/Button';
import history from 'services/history';

function Home() {
  return (
    <>
      <h1>Projeto Retomar</h1>
      <Button
        style={{ marginTop: 10 }}
        onClick={() => history.push('/dashboard')}
      >
        Go to Dashboard
      </Button>
    </>
  );
}

export default Home;
