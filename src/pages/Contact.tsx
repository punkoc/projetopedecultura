import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Mensagem enviada com sucesso!',
      severity: 'success'
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Entre em Contato
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 8 }}>
          Queremos ouvir você! Compartilhe suas histórias, sugestões e ideias para a cultura de Atibaia
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Envie sua Mensagem
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Assunto"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Enviar Mensagem
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Informações de Contato
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" paragraph>
                  <strong>Localização:</strong><br />
                  Atibaia - SP<br />
                  CEP: 12940-000<br />
                  Brasil
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Email:</strong><br />
                  contato@pedecultura.com.br
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Sobre o Pé de Cultura:</strong><br />
                  Somos um portal dedicado à cultura de Atibaia e região, trazendo conteúdo relevante sobre arte, 
                  música, meio ambiente e muito mais. Nossa missão é valorizar e divulgar as riquezas culturais 
                  da nossa cidade e região.
                </Typography>
                <Typography variant="body1">
                  <strong>Parcerias e Colaborações:</strong><br />
                  Interessado em colaborar com o Pé de Cultura? Entre em contato conosco para discutir 
                  possibilidades de parcerias e projetos culturais.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 