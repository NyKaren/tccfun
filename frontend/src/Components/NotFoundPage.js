import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 600
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: `10px`,
        height: "100%",
        width: "99%",
        marginTop: theme.spacing(7)
    },
    link: {
        color: "rgba(0,0,0,0.65)",
        textDecoration: "none",
        marginLeft: "10%",
        alignSelf: "flex-start",
        "&:hover": {
            color: "rgba(0,0,0,1)"
        }
    }
}));

export default function NotFoundPage() {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                404 Page not found
            </Typography>
            <div>
                <p style={{textAlign:"center"}}>
                    <Link to="/">Ir para tela inicial. </Link>
                </p>
            </div>
        </div>
    );
}