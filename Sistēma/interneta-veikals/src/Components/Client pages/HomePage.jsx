import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Grid, Typography } from '@mui/material';
import CardComp from '../Card/Card';
import axios from 'axios';

const HomePage = () => {
  const [newData, setNewData] = useState([{}]);
  const [popData, setPopData] = useState([{}]);

  useEffect(() => {
    FetchPopular();
    FetchNew();
  }, []);

  const FetchPopular = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/popularakie`);
      setPopData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const FetchNew = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/jaunakie`);
      setNewData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          m: '1rem auto',
          height: '10rem',
          display: 'flex',
          backgroundColor: '#272727',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.5rem',
        }}
      >
        <Typography sx={{ fontSize: '2.5rem' }}>Populārākās preces</Typography>
      </Container>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {popData
          ? popData.map((key, index) => {
              return (
                <Grid key={index} item={true} xs={11.8} sm={5.8} md={5.8} lg={2.8} xl={2.8}>
                  <CardComp
                    key={index}
                    title={key.nosaukums}
                    imgsrc={key.attels}
                    Category={key.kategorija}
                    itemId={key.id}
                  />
                </Grid>
              );
            })
          : ''}
      </Grid>
      <Container
        sx={{
          m: '1rem auto',
          height: '10rem',
          display: 'flex',
          backgroundColor: '#272727',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '.5rem',
        }}
      >
        <Typography sx={{ fontSize: '2.5rem' }}>Jaunākās preces</Typography>
      </Container>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {newData
          ? newData.map((key, index) => {
              return (
                <Grid key={index} item={true} xs={11.8} sm={5.8} md={5.8} lg={2.8} xl={2.8}>
                  <CardComp
                    key={index}
                    title={key.nosaukums}
                    imgsrc={key.attels}
                    Category={key.kategorija}
                    itemId={key.id}
                  />
                </Grid>
              );
            })
          : ''}
      </Grid>
      <Footer />
    </>
  );
};
export default HomePage;
