import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre Nós
            </Typography>
            <Typography variant="body2" color="text.secondary">
              O Pé de Cultura é um portal dedicado à divulgação e valorização da cultura de Atibaia e região. 
              Através de nossos colunistas especializados, trazemos o melhor do cenário cultural, artístico, 
              ambiental e social de nossa comunidade.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="text.secondary">Início</Link>
              <Link href="/about" color="text.secondary">Sobre</Link>
              <Link href="/portfolio" color="text.secondary">Projetos</Link>
              <Link href="/colunistas" color="text.secondary">Colunistas</Link>
              <Link href="/contact" color="text.secondary">Contato</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contato@pedecultura.com.br<br />
              Atibaia - SP<br />
              Brasil
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Pé de Cultura. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 