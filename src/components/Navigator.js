import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchField from './form/SearchField';
import ConfigModal from './dialog/ConfigModal';
import ProService from '../util/PropresenterService';
import { connect } from 'react-redux';
import { setLibrary, setPresentation, setLoadingStatus } from '../store/actions';
import { throttle } from 'lodash';

const useStyles = makeStyles(theme => ({
    appHeader: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        justifyContent: 'flex-end',
    },
    appTitle: {
        marginRight: 'auto',
    },
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.9)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#4fc3f7',
        },
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemText: {
        fontSize: 22,
    },
    headerButton: {
        padding: theme.spacing(1),
        width: 'auto',
        '& svg': {
            fontSize: 28,
        },
        '& .MuiListItemIcon-root': {
            minWidth: 0,
        }
    },
    arrowIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
}));

function Navigator({ library, dispatch, ...other }) {
    const classes = useStyles();
    let [presList, setPresList] = useState([...library]);
    let [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if(!library.length){
            ProService.getLibrary().then((library) => {
                setPresList(library);
                dispatch(setLibrary(library));
            });
        } else {
            setPresList(library);
        }
    }, [library]);

    const onSettingsClick = () => {
        setOpenModal(true);
    };

    const onPresClick = async (e) => {
        const presName = e.currentTarget.getAttribute('presentation');

        dispatch(setLoadingStatus(true));
        const presentation = await ProService.getPresentation(presName);
        dispatch(setPresentation(presentation));
        dispatch(setLoadingStatus(false));
    };

    const onSearchFieldChange = throttle((value) => {
        setPresList(library.filter((title) => title.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
    }, 800);

    const onModalClose = () => {
        setOpenModal(false);
    };

    return (
        <React.Fragment>
            <ConfigModal open={openModal} onClose={onModalClose} />
            <Drawer variant="permanent" {...other}>
                <List disablePadding>
                    <ListItem className={clsx(classes.firebase, classes.appHeader)}>
                        <div className={classes.appTitle}>ProRemote</div>
                        <ListItem button disableRipple className={classes.headerButton} onClick={onSettingsClick}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                        </ListItem>
                    </ListItem>
                    <ListItem className={classes.categoryHeader}>
                        <ListItemText classes={{ primary: classes.categoryHeaderPrimary }}>
                            <SearchField onChange={onSearchFieldChange} />
                        </ListItemText>
                    </ListItem>
                    {presList.map((pres, i) => (
                        <ListItem key={i} button presentation={pres} className={classes.item} onClick={onPresClick}>
                            <ListItemText className={classes.itemText}>
                                { pres.split('.')[0] }
                            </ListItemText>
                            <ListItemIcon className={classes.arrowIcon}>
                                <ArrowForwardIosIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    );
}

const mapState = (state) => ({
    library: state.library
});

export default connect(mapState)(Navigator);
