import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import { Link } from "react-router-dom";

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

  const [user_username, setUsername] = React.useState("");
  const [user_password, setPassword] = React.useState("");
  const [user_email, setEmail] = React.useState("");
  const [user_first_name, setFirst_name] = React.useState("");
  const [user_last_name, setLast_name] = React.useState("");
  const [user_created_by, setUser_created_by] = React.useState(new Date("1998-04-02T21:11:54"));
  const [user_terminated_by, setUser_terminated_by] = React.useState("");
  const [user_status, setUser_status] = React.useState(true);

  const handleUsernameChange = event => setUsername(event.target.value); 
  const handlePasswordChange = event => setPassword(event.target.value); 
  const handleEmailChange = event => setEmail(event.target.value); 
  const handleFirst_nameChange = event => setFirst_name(event.target.value); 
  const handleLast_nameChange = event => setLast_name(event.target.value);
 
  const [message, setMessage] = React.useState("Nenhum dado salvo nesta sessão.");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/user", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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
    console.log(body.id);
    setMessage(body.id ? "Usuário salvo com sucesso!" : "Erro ao salvar usuário.");
  }

  const handleSubmit = variables => {
    const toInput = { user_username, user_password, user_email, user_first_name, user_last_name, user_created_by, user_terminated_by, user_status };
    sampleFunc(toInput);
    setUsername("");
    setPassword("");
    setEmail("");
    setFirst_name("");
    setLast_name("");
    setUser_created_by(new Date("1998-04-02T21:11:54"));
    setUser_terminated_by(null);
    setUser_status(true);
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
          Adicionar Usuário
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                value={user_username}
                label="Usuário"
                name="username"
                autoComplete="Usuário"
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                value={user_password}
                label="Senha"
                name="password"
                autoComplete="********"
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={user_email}
                label="E-mail"
                name="email"
                autoComplete="exemplo@exemplo.com"
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Nome"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                value={user_first_name}
                id="first_name"
                label="Nome"
                onChange={handleFirst_nameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                value={user_last_name}
                label="Sobrenome"
                name="last_name"
                autoComplete="Sobrenome"
                onChange={handleLast_nameChange}
              />
            </Grid>
          </Grid>
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
              <Link to="/userTableView">Ver Usuários</Link>
            </Grid>
          </Grid>
          <Link className={classes.link} to="/">
            {" "}
            <Typography align="left">
              &#x2190; Retornar para Adicionar Usuário
            </Typography>{" "}
          </Link>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </Container>
  );
}
