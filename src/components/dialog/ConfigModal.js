import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import ProService from '../../util/PropresenterService';
import RefreshIcon from '@material-ui/icons/Refresh';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { setLibrary } from '../../store/actions';

const dialogStyles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(dialogStyles)(props => {
    const { children, classes, ...other } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h5">{children}</Typography>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const modalStyles = theme => ({
    paper: {
        width: 600,
        borderRadius: 4
    },
    status: {
        marginTop: theme.spacing(3),
    },
    connected: {
        color: '#50C878',
    },
});

const ConfigModal = withStyles(modalStyles)((props) => {
    const { open, onClose, classes, connected, dispatch } = props;
    const [checked, setChecked] = useState(connected);
    const [ipVal, setIpVal] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        const ip = JSON.parse(localStorage.getItem('ip')) || ''; //'192.168.5.151';
        setIpVal(ip);
    }, []);

    const onSave = () => {
        localStorage.setItem('ip', JSON.stringify(ipVal));
        //setIp(ipVal);
        onClose();
    };

    const onModalClose = () => {
        onClose();
    };

    const onIpChange = (e) => {
        const ip = e.currentTarget.value.trim();
        setIpVal(ip);
    };

    const onConnectSwitchChange = (e) => {
        let val = e.currentTarget.checked;

        if(val) {
            setLoading(val);
            setChecked(val);
            ProService.connect(ipVal)
                .catch((error) => {
                    setChecked(false);
                    setErrorMsg(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            ProService.disconnect();
            setChecked(val);
        }

        setErrorMsg('');
    };

    const onRefreshLib = () => {
        ProService.getLibrary().then((library) => {
            dispatch(setLibrary(library));
        });
    };

    return (
        <Dialog open={open} onClose={onClose} classes={{ paper: classes.paper }}>
            <DialogTitle>Settings</DialogTitle>
            <DialogContent dividers>
                <TextField
                    margin="dense"
                    id="ip"
                    label="ProPresenter IP Address"
                    type="text"
                    value={ipVal}
                    onChange={onIpChange}
                />
                <Grid container justify="flex-start" spacing={2} className={classes.status}>
                    <Grid item>
                        <Typography variant="h6" className={clsx({ [classes.connected]: connected })}>
                            {connected ? 'Connected' : 'Not connected'}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Switch disabled={!ipVal} checked={checked} onChange={onConnectSwitchChange} color="primary" />
                    </Grid>
                    <Grid item>
                        {loading && <CircularProgress size={24} />}
                    </Grid>
                </Grid>

                <Typography>
                    {errorMsg && `${errorMsg}`}
                </Typography>

                <Grid container justify="flex-start" spacing={2} className={classes.status}>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!connected}
                            onClick={onRefreshLib}
                        >
                            <RefreshIcon />
                            <Typography variant="h6">
                                Refresh
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={onModalClose} color="primary">
                    Cancel
                </Button>
                <Button autoFocus onClick={onSave} color="primary">
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    );
});

const mapState = (state) => ({
    ip: state.ip,
    connected: state.connected,
});

export default connect(mapState)(ConfigModal);
