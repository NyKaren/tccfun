import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Slide from "@material-ui/core/Slide";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function ManageActivity() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);
  const [data, setUpdateData] = React.useState([]);

  const [gamification, setGamification] = React.useState([]);
  const [gamification_id, setGamification_id] = React.useState(0);


  const [isTcc1MinimoDe67, setIsTcc1MinimoDe67] = React.useState(false);
  const [isTcc1MinimoDe67Checked, setIsTcc1MinimoDe67Checked] = React.useState(false);

    const [isTcc1CourseChecked, setIsTcc1CourseChecked] = React.useState(false);

  const [isTcc1EscolherAreaDeInteresse, setIsTcc1EscolherAreaDeInteresse] = React.useState(false);
  const [isTcc1EscolherAreaDeInteresseChecked, setIsTcc1EscolherAreaDeInteresseChecked] = React.useState(false);

  const [message, setMessage] = React.useState("Nenhum dado salvo nesta sessão.");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/gamification"+1, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log("POST body: "+body);
    console.log(body.id);
    setMessage(body.id ? "Atividade salva com sucesso!" : "Erro ao salvar atividade.");
  }

  // TODO
  async function sampleFunc() {
    let response = await fetch("/api/gamification/1" );
    let body = await response.json();
    console.log(response);
    console.log(body);
    setUpdateData(body);
  }
  // {data?.map(row => (
  //     <TableRow key={row.activity_description}>
  //       <TableCell align="center">{row.activity_description}</TableCell>
  //       <TableCell align="center">{row.activity_level}</TableCell>
  //       <TableCell align="center">{row.activity_points}</TableCell>
  //     </TableRow>
  // ))}

  const handleSubmit = variables => {
    const toInput = { gamification };
    sampleFunc(data);

    setUpdateData(data);
    //TODO
    // setGamification(setGamification_id(1),);
    // isTcc1MinimoDe67, isTcc1EscolherAreaDeInteresse
    // setIsTcc1MinimoDe67(["Mínimo de 67% da carga horária total das disciplinas obrigatórias do curso", "L1", 50, isTcc1MinimoDe67Checked]);
    // setIsTcc1EscolherAreaDeInteresse(["Escolher área de interesse no curso", "L1", 50, isTcc1EscolherAreaDeInteresseChecked]);

    console.log("Submit data: "+data);
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Gerenciar Atividades do Aluno
        </Typography>
        <form className={classes.form} noValidate>
          <div style={{ display: "block", padding: 30 }}>
            <h4>TCC I</h4>
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1MinimoDe67Checked}
                      onChange={() => {
                        setIsTcc1MinimoDe67Checked((prev) => !prev);
                      }}
                  />
                }
                label="Vc já cumpriu 67% da sua carga horária?"
            />
            {/*<div style={{ display: "flex" }}>*/}
            {/*  <Slide in={isTcc1MinimoDe67Checked}>*/}
            {/*    <Paper elevation={5} style={{ margin: 5 }}>*/}
            {/*      <svg style={{ width: 100, height: 100 }}>*/}
            {/*        <polygon*/}
            {/*            points="0,80 45,00, 80,70"*/}
            {/*            style={{*/}
            {/*              fill: "orange",*/}
            {/*              stroke: "dimgrey",*/}
            {/*              strokeWidth: 1,*/}
            {/*            }}*/}
            {/*        />*/}
            {/*      </svg>*/}
            {/*    </Paper>*/}
            {/*  </Slide>*/}
            {/*</div>*/}
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1CourseChecked}
                      onChange={() => {
                          setIsTcc1CourseChecked((prev) => !prev);
                      }}
                  />
                }
                label="Qual o seu curso?"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1EscolherAreaDeInteresseChecked}
                      onChange={() => {
                        setIsTcc1EscolherAreaDeInteresseChecked((prev) => !prev);
                      }}
                  />
                }
                label="Qual a área que você mais gosta?"
            />
          </div>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Salvar
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/activityTableView">Ver Atividades</Link>
            </Grid>
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </Container>
  );
}
