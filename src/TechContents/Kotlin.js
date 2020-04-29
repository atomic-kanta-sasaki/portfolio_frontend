import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

const DialogStyled = styled.div`
    `;

const Title = styled.div`
        text-align: center;
        font-size: 25px;
    `;

class Kotlin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClickOpen() {
        this.setState({ isOpen: true })
    }

    handleClickClose() {
        this.setState({ isOpen: false })
    }

    render() {

        return (
            <DialogStyled>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen.bind(this)}>
                    Detail
            </Button>
                <Dialog
                    open={this.state.isOpen}
                    onClose={this.handleClickClose.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <Title>Kotlin</Title>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            文科省が行っているenPiTというプロジェクトでAndroidアプリの開発の際に使用 <br />
                            位置情報, GoogleMapAPI, FireBaseのAuthActionを使用して位置情報予定管理アプリケーションを作成に使用.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClickClose.bind(this)} color="primary">
                            Close
                    </Button>
                    </DialogActions>
                </Dialog>
            </DialogStyled>
        );
    }
}

export default Kotlin;