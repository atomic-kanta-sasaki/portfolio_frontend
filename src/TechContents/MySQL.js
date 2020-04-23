import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DialogStyled = styled.div`
    `;

    const Title = styled.div`
        text-align: center;
        font-size: 25px;
    `;

    return (
        <DialogStyled>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Detail
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Title>Kotlin</Title>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        実務での使用経験あり.
                        新機能開発の際のDBの追加作成, GET, POST, PUT, DELETEと一通りのクエリの作成経験あり
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </DialogStyled>
    );
}