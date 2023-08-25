import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes'
import Box from '@mui/material/Box';
import { Divider, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  height: 589,
  bgcolor: 'background.paper',
  borderRadius: 2,
};

const btn = {
  borderRadius: 50,
  fontFamily: 'Work Sans',
  fontSize: 14,
  fontWeight: 400,
}

const btnStyle = {
  border: 1,
  borderColor: '#666666',
};

const textTitle = {
  color: '#131313',
  fontFamily: 'Work Sans',
  p: 2,
  fontWeight: 500,
}

const text = {
  color: '#131313',
  fontFamily: 'Work Sans',
  p: 2,
}

export default function Modal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} variant='contained' color='error'>Abrir modal 2</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography id="modal-modal-title" component="h5" sx={textTitle}>
              Configuración de atributos
              <IconButton edge="end">
                <ClearIcon />
              </IconButton>
            </Typography>
            <Divider/>

            <Typography id="modal-modal-description" sx={[text, { mt: 2 }]}>
              Al proceder se modificará en cada producto o servicios dónde se encuentre configurado.
            </Typography>
            <Divider/>
            <Box
              display="flex"
              justifyContent="end"
              sx={{ mt: 2 }}
            >
              <Button variant='contained' disableElevation sx={[btn, btnStyle]} color='white'>
                Cancelar
              </Button>
              <Button variant='contained' disableElevation sx={[btn, { mr: 3, ml:1.5 }]} color='lblue'>
                Guardar
              </Button>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}