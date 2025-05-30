import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const Colunistas = () => {
  const columnists = [
    {
      name: 'Juliana Gobbe',
      role: 'Colunista de Arte e Cultura',
      description: 'Juliana Gobbe é doutora e mestra em Filosofia e História da Educação pela Unicamp. É graduada em Letras e tem licenciatura em História e Pedagogia. Atualmente encontra-se em fase de finalização do seu pós-doc cuja temática é Vida de Galileu de Brecht e o conhecimento historicamente negado.',
      image: '/fotoju.jpg'  
    },
    {
      name: 'Jamil Scatena',
      role: 'Colunista de Música',
      description: 'Graduado em História – Universidade São Francisco – Bragança Paulista. Pós-graduação em História da Educação Afro-Brasileira – USF Bragança Paulista. Músico Percussionista.\n\nDiretor das escolas de Samba de Atibaia: Unidos da Reciclagem; Botafogo; Imperial e Imperial de Caetetuba. Compositor/interprete de sambas de enredo.',
      image: '/jamil.jpg' 
    },
    {
      name: 'Neia Costa',
      role: 'Colunista de Meio Ambiente',
      description: 'Nascida e criada em Atibaia, Mãe solo, Assistente Social, bacharel em Direito, servidora pública federal aposentada, com especialização em Serviço Social e Políticas Sociais, e Direito Constitucional. Ativista na garantia de direitos das pessoas e da natureza. Liderança da Expedição pelas Margens do Córrego do Onofre, coletivo que luta pela recuperação e preservação do Rio, liderança do Coletivo Vozes e integrante do Coletivo Literário Kalunia. Desde 2019 construindo um projeto político.',
      image: '/neia.jpg' 
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Nossos Colunistas
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 8 }}>
          Conheça os colunistas que trazem as melhores histórias da nossa região
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Sobre Nossos Colunistas
            </Typography>
            <Typography paragraph>
              Nossa equipe de colunistas é formada por profissionais apaixonados pela cultura local.
              Cada um deles traz uma perspectiva única sobre as diferentes expressões artísticas e
              culturais que fazem parte da identidade de Atibaia e região.
            </Typography>
            <Typography paragraph>
              Com experiência em suas respectivas áreas, nossos colunistas trabalham para trazer
              conteúdo relevante, análises profundas e novidades do cenário cultural local,
              mantendo você sempre bem informado sobre o que acontece em nossa comunidade.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/colunistas-banner.png"
              alt="Equipe de Colunistas - Ilustração artística representando diferentes áreas culturais"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
                objectFit: 'cover'
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 8, mb: 4 }} align="center">
          Conheça Nossa Equipe
        </Typography>
        
        <Grid container spacing={4}>
          {columnists.map((columnist, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={columnist.image}
                  alt={columnist.name}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {columnist.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {columnist.role}
                </Typography>
                <Typography color="text.secondary">
                  {columnist.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Colunistas; 