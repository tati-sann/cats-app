import React, {FC} from "react";
import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
} from "@mui/material";

interface CatModalProps {
}

const AddCatModal: FC<CatModalProps> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item md={3}>
      <Button variant="outlined" fullWidth onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Add cat
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: 'flex', flexWrap: 'wrap' }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Name" variant="outlined" fullWidth margin="dense"
            />
            <TextField
              label="Descriptions" variant="outlined" fullWidth margin="dense"
            />
            <TextField
              label="Image url" variant="outlined" fullWidth margin="dense"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
          >
            Close
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default AddCatModal;
