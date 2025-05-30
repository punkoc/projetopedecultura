import React from 'react';
import { AppBar, Toolbar, Container, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { text: 'Início', path: '/' },
    { text: 'Sobre', path: '/about' },
    { text: 'Projetos', path: '/portfolio' },
    { text: 'Colunistas', path: '/colunistas' },
    { text: 'Contato', path: '/contact' }
  ];

  return (
    <AppBar 
      position="static" 
      elevation={1}
      sx={{
        backgroundColor: '#FAE5C7',
        backgroundImage: 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            py: 2, 
            px: { xs: 1, md: 4 },
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 0 }
          }}
        >
          {/* Logo e textos */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1,
              position: 'relative',
              width: { xs: '100%', md: 'auto' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#1B5E20',
                fontWeight: 700,
                mr: 3,
                fontFamily: 'Poppins',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2.5rem' },
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Atibaia
            </Typography>
            <Box
              component="img"
              src="/images/logo.png"
              alt="Pé de Cultura"
              sx={{
                height: { xs: 80, sm: 100, md: 100, lg: 130 },
                width: 'auto',
                mr: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Typography
              variant="h3"
              sx={{
                color: '#1B5E20',
                fontWeight: 700,
                fontFamily: 'Poppins',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2.5rem' },
                display: { xs: 'none', sm: 'block' }
              }}
            >
              e Região
            </Typography>
          </Box>

          {/* Menu */}
          <Box 
            sx={{ 
              display: 'flex', 
              gap: { xs: 1, md: 3 },
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="primary"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1.1rem' }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 