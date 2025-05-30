import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Sarau Cultural de Atibaia',
      description: 'Encontros mensais que reúnem poetas, músicos e artistas locais para compartilhar suas obras e experiências. Um espaço de expressão livre e intercâmbio cultural.',
      image: '/images/sarau.png',
      category: 'Eventos Culturais'
    },
    {
      title: 'Oficinas de Arte nas Escolas',
      description: 'Projeto que leva oficinas de artes visuais, música e teatro para escolas públicas de Atibaia, incentivando o desenvolvimento artístico desde cedo.',
      image: '/images/oficinas.png',
      category: 'Educação Artística'
    },
    {
      title: 'Exposição "Artistas de Atibaia"',
      description: 'Mostra itinerante que apresenta obras de artistas locais em diferentes espaços da cidade, promovendo a visibilidade da produção artística regional.',
      image: '/images/exposicao.png',
      category: 'Artes Visuais'
    },
    {
      title: 'Festival de Música na Praça',
      description: 'Evento que ocupa as praças da cidade com apresentações musicais de artistas e bandas locais, valorizando a diversidade musical de nossa região.',
      image: '/images/musica.png',
      category: 'Música'
    },
    {
      title: 'Encontro de Culturas Tradicionais',
      description: 'Celebração das manifestações culturais tradicionais de Atibaia, incluindo folclore, danças, artesanato e gastronomia típica.',
      image: '/images/tradicional.jpg',
      category: 'Cultura Popular'
    },
    {
      title: 'Circuito de Teatro',
      description: 'Programação que reúne apresentações teatrais em diferentes pontos da cidade, incentivando a produção cênica local e formando público.',
      image: '/images/teatro.png',
      category: 'Artes Cênicas'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Nossos Projetos
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 8 }}>
          Iniciativas que fortalecem e promovem a arte e a cultura em Atibaia
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    backgroundColor: 'grey.200',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    {project.category}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Saiba Mais
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Quer participar dos nossos projetos?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            Estamos sempre abertos a novas parcerias e colaborações. Se você é artista, produtor cultural 
            ou tem interesse em contribuir com algum de nossos projetos, entre em contato conosco.
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
  );
};

export default Portfolio; 