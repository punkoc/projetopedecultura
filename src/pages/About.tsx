import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  const teamMembers = [
    {
      name: 'Juliana Gobbe',
      role: 'Editora-Chefe',
      description: 'Doutora e mestra em Filosofia e História da Educação pela Unicamp, coordena a linha editorial do Pé de Cultura.',
      image: '/fotoju.jpg'
    },
    {
      name: 'Jamil Scatena',
      role: 'Editor de Cultura e Música',
      description: 'Historiador e músico percussionista, traz sua experiência com as escolas de samba e a cultura popular de Atibaia.',
      image: '/jamil.jpg'
    },
    {
      name: 'Neia Costa',
      role: 'Editora de Meio Ambiente',
      description: 'Assistente Social e ativista ambiental, lidera projetos importantes como a Expedição pelas Margens do Córrego do Onofre.',
      image: '/neia.jpg'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Sobre o Pé de Cultura
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 8 }}>
          Um portal dedicado à valorização da cultura e da identidade de Atibaia e região
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Nossa História
            </Typography>
            <Typography paragraph>
              O Pé de Cultura nasceu do desejo de criar um espaço dedicado à valorização e 
              divulgação da rica cultura de Atibaia e região. Nossa missão é ser uma ponte entre 
              os artistas, produtores culturais, ambientalistas e a comunidade, promovendo o 
              diálogo e o fortalecimento da identidade cultural local.
            </Typography>
            <Typography paragraph>
              Através de nossos colunistas especializados, abordamos temas diversos como arte, 
              música, teatro, literatura, meio ambiente e questões sociais. Acreditamos que a 
              cultura é uma ferramenta poderosa de transformação social e preservação da 
              memória coletiva de nossa cidade.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/logo.png"
              alt="Equipe Pé de Cultura"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 8, mb: 4 }} align="center">
          Nossa Equipe Editorial
        </Typography>
        
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography color="text.secondary">
                  {member.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom align="center">
            Nossa Missão
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Buscamos ser um espaço democrático e inclusivo, onde as diferentes expressões 
            culturais de Atibaia e região encontram voz e reconhecimento. Trabalhamos para:
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom color="primary">
                Valorização Cultural
              </Typography>
              <Typography>
                Promover e preservar as manifestações culturais locais, desde as tradições 
                mais antigas até as expressões contemporâneas.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom color="primary">
                Consciência Ambiental
              </Typography>
              <Typography>
                Incentivar o debate sobre a preservação do meio ambiente e o desenvolvimento 
                sustentável em nossa região.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom color="primary">
                Transformação Social
              </Typography>
              <Typography>
                Contribuir para o desenvolvimento social através da cultura, educação e 
                conscientização ambiental.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default About; 