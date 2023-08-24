import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  height: 340,
  bgcolor: 'background.paper',
  borderRadius: 3,
  p: 4,
};

const btn = {
  borderRadius: 50,
  fontFamily: 'Work Sans',
  fontSize: 16,
  fontWeight: 400,
}

const btnStyle = {
  border: 1,
  borderColor: '#666666',
};

const text = {
  textAlign: 'center',
  color: '#131313',
  fontFamily: 'Work Sans'
}


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} variant=''>Abrir</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ mb: 2, mt: 1.5 }}
            >
              <img src="../media/ResultIcon.png" alt="warning" width='120' height='120' />
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h4" sx={text}>
              Estás por modificar un atributo
            </Typography>
            <Typography id="modal-modal-description" sx={[text, { mt: 2 }]}>
              Al proceder se modificará en cada producto o servicios dónde se encuentre configurado.
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ mt: 8 }}
            >
              <Button variant='contained' disableElevation sx={[btn, btnStyle]} color='cancel'>
                Cancelar
              </Button>
              <Button variant='contained' disableElevation sx={[btn, { ml: 2 }]} color='normal'>
                Modificar atributo
              </Button>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}