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
                    <Title>PARS(enPiT)</Title>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Kotlin, SQLiteを使用.<br />
                        Kotlinを使用した位置情報を利用した予定管理アプリを作成.<br />
                        このアプリの特徴としては, 時間で予定通知を出すのではなく, 登録した場所に近づいたら通知を出すというもの.<br />
                        またPMとして未経験者でも開発できるような環境のサポートや技術的サポートを実施.

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