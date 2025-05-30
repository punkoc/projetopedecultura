import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Arte & Teatro',
      description: 'Promovemos e apoiamos expressões artísticas locais, desde teatro até artes visuais.',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Literatura',
      description: 'Incentivamos a leitura e a produção literária através de clubes de leitura e oficinas de escrita.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Música',
      description: 'Incentivamos e promovemos espaços para apresentações de artistas da região.',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <Box
        sx={{
          background: `url('/images/banner-art.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(27, 94, 32, 0.7), rgba(121, 85, 72, 0.7))',
            mixBlendMode: 'multiply',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ maxWidth: 800 }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Cultivando Arte e Cultura
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              Um espaço dedicado ao desenvolvimento artístico e cultural da nossa região
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  backgroundColor: 'rgba(121, 85, 72, 0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(121, 85, 72, 1)'
                  }
                }}
              >
                Participe
              </Button>
              <Button
                component={Link}
                to="/portfolio"
                variant="outlined"
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                size="large"
              >
                Nossos Projetos
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ my: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Nossas Áreas de Atuação
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom align="center" color="text.secondary" sx={{ mb: 8 }}>
            Desenvolvendo talentos e promovendo a cultura local
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={2}
                  sx={{
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover'
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom color="primary">
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Faça Parte dessa História
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
              O Pé de Cultura é um espaço aberto para todos que desejam explorar sua criatividade, 
              aprender algo novo ou compartilhar seus talentos com a comunidade.
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Entre em Contato
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home; 