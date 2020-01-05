import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const useStyles = makeStyles(theme => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
        padding: 4,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
    header: {
        height: 65
    }
}));

function Header(props) {
    const classes = useStyles();
    let { onDrawerToggle, songTitle, loading } = props;
    songTitle = songTitle.split('.')[0];

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={5}>
                <Toolbar className={classes.header}>
                    <Grid container spacing={1} justify="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item xs>
                            <Typography variant="h4" align="center">
                                {loading ? 'Loading...' : songTitle}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

const mapState = (state) => ({
    songTitle: state.activePresentation.name,
    loading: state.loading,
});

export default connect(mapState)(Header);
