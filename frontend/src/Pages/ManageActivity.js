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

    const [isTcc1EscolherProfessor, setIsTcc1EscolherProfessor] = React.useState(false);
    const [isTcc1EscolherProfessorChecked, setIsTcc1EscolherProfessorChecked] = React.useState(false);

    const [isTcc1EscolherCoorientador, setIsTcc1EscolherCoorientador] = React.useState(false);
    const [isTcc1EscolherCoorientadorChecked, setIsTcc1EscolherCoorientadorChecked] = React.useState(false);

    const [isTcc1Matricula, setIsTcc1Matricula] = React.useState(false);
    const [isTcc1MatriculaChecked, setIsTcc1MatriculaChecked] = React.useState(false);

    const [isTcc1Tema, setIsTcc1Tema] = React.useState(false);
    const [isTcc1TemaChecked, setIsTcc1TemaChecked] = React.useState(false);

    const [isTcc1DataDaAvaliacao, setIsTcc1DataDaAvaliacao] = React.useState(false);
    const [isTcc1DataDaAvaliacaoChecked, setIsTcc1DataDaAvaliacaoChecked] = React.useState(false);

    const [isTcc1EstudouMetodologia, setIsTcc1EstudouMetodologia] = React.useState(false);
    const [isTcc1EstudouMetodologiaChecked, setIsTcc1EstudouMetodologiaChecked] = React.useState(false);

    const [isTcc1ElaborouPlanoDeTrabalho, setIsTcc1ElaborouPlanoDeTrabalho] = React.useState(false);
    const [isTcc1ElaborouPlanoDeTrabalhoChecked, setIsTcc1ElaborouPlanoDeTrabalhoChecked] = React.useState(false);

    const [isTcc1BuscouTrabalhosSimilares, setIsTcc1BuscouTrabalhosSimilares] = React.useState(false);
    const [isTcc1BuscouTrabalhosSimilaresChecked, setIsTcc1BuscouTrabalhosSimilaresChecked] = React.useState(false);

    const [isTcc1ElaborouCronograma, setIsTcc1ElaborouCronograma] = React.useState(false);
    const [isTcc1ElaborouCronogramaChecked, setIsTcc1ElaborouCronogramaChecked] = React.useState(false);

    const [isTcc1EntregouPlanoDeTrabalho, setIsTcc1EntregouPlanoDeTrabalho] = React.useState(false);
    const [isTcc1EntregouPlanoDeTrabalhoChecked, setIsTcc1EntregouPlanoDeTrabalhoChecked] = React.useState(false);

    const [isTcc1DefiniuPressupostos, setIsTcc1DefiniuPressupostos] = React.useState(false);
    const [isTcc1DefiniuPressupostosChecked, setIsTcc1DefiniuPressupostosChecked] = React.useState(false);

    const [isTcc1DefiniuProblematica, setIsTcc1DefiniuProblematica] = React.useState(false);
    const [isTcc1DefiniuProblematicaChecked, setIsTcc1DefiniuProblematicaChecked] = React.useState(false);

    const [isTcc1DefiniuProblemaDePesquisa, setIsTcc1DefiniuProblemaDePesquisa] = React.useState(false);
    const [isTcc1DefiniuProblemaDePesquisaChecked, setIsTcc1DefiniuProblemaDePesquisaChecked] = React.useState(false);

    const [isTcc1DefiniuHipotese, setIsTcc1DefiniuHipotese] = React.useState(false);
    const [isTcc1DefiniuHipoteseChecked, setIsTcc1DefiniuHipoteseChecked] = React.useState(false);

    const [isTcc1DefiniuObjetivoGeral, setIsTcc1DefiniuObjetivoGeral] = React.useState(false);
    const [isTcc1DefiniuObjetivoGeralChecked, setIsTcc1DefiniuObjetivoGeralChecked] = React.useState(false);

    const [isTcc1DefiniuObjetivoEspecificos, setIsTcc1DefiniuObjetivoEspecificos] = React.useState(false);
    const [isTcc1DefiniuObjetivoEspecificosChecked, setIsTcc1DefiniuObjetivoEspecificosChecked] = React.useState(false);

    const [isTcc1DefiniuPassosMetodologicos, setIsTcc1DefiniuPassosMetodologicos] = React.useState(false);
    const [isTcc1DefiniuPassosMetodologicosChecked, setIsTcc1DefiniuPassosMetodologicosChecked] = React.useState(false);

    const [isTcc1DefiniuEtapas, setIsTcc1DefiniuEtapas] = React.useState(false);
    const [isTcc1DefiniuEtapasChecked, setIsTcc1DefiniuEtapasChecked] = React.useState(false);

    const [isTcc1DefiniuTecnicas, setIsTcc1DefiniuTecnicas] = React.useState(false);
    const [isTcc1DefiniuTecnicasChecked, setIsTcc1DefiniuTecnicasChecked] = React.useState(false);

    const [isTcc1DefiniuResultadosEsperados, setIsTcc1DefiniuResultadosEsperados] = React.useState(false);
    const [isTcc1DefiniuResultadosEsperadosChecked, setIsTcc1DefiniuResultadosEsperadosChecked] = React.useState(false);

    const [isTcc1DeuInicioAtividadesDeEstudo, setIsTcc1DeuInicioAtividadesDeEstudo] = React.useState(false);
    const [isTcc1DeuInicioAtividadesDeEstudoChecked, setIsTcc1DeuInicioAtividadesDeEstudoChecked] = React.useState(false);

    const [isTcc1BuscouFundamentacaoTeorica, setIsTcc1BuscouFundamentacaoTeorica] = React.useState(false);
    const [isTcc1BuscouFundamentacaoTeoricaChecked, setIsTcc1BuscouFundamentacaoTeoricaChecked] = React.useState(false);

    const [isTcc1ProduziuProjeto, setIsTcc1ProduziuProjeto] = React.useState(false);
    const [isTcc1ProduziuProjetoChecked, setIsTcc1ProduziuProjetoChecked] = React.useState(false);

    const [isTcc1EscolheuTema, setIsTcc1EscolheuTema] = React.useState(false);
    const [isTcc1EscolheuTemaChecked, setIsTcc1EscolheuTemaChecked] = React.useState(false);

    const [isTcc1EscolheuProblema, setIsTcc1EscolheuProblema] = React.useState(false);
    const [isTcc1EscolheuProblemaChecked, setIsTcc1EscolheuProblemaChecked] = React.useState(false);

    const [isTcc1EscolheuObjetivoGeralEEspecificos, setIsTcc1EscolheuObjetivoGeralEEspecificos] = React.useState(false);
    const [isTcc1EscolheuObjetivoGeralEEspecificosChecked, setIsTcc1EscolheuObjetivoGeralEEspecificosChecked] = React.useState(false);

    const [isTcc1EscolheuMetodologia, setIsTcc1EscolheuMetodologia] = React.useState(false);
    const [isTcc1EscolheuMetodologiaChecked, setIsTcc1EscolheuMetodologiaChecked] = React.useState(false);

    const [isTcc1EscolheuRevisaoDaLiteratura, setIsTcc1EscolheuRevisaoDaLiteratura] = React.useState(false);
    const [isTcc1EscolheuRevisaoDaLiteraturaChecked, setIsTcc1EscolheuRevisaoDaLiteraturaChecked] = React.useState(false);

    const [isTcc1EscolheuTrabalhosRelacionados, setIsTcc1EscolheuTrabalhosRelacionados] = React.useState(false);
    const [isTcc1EscolheuTrabalhosRelacionadosChecked, setIsTcc1EscolheuTrabalhosRelacionadosChecked] = React.useState(false);

    const [isTcc1EscolheuReferencias, setIsTcc1EscolheuReferencias] = React.useState(false);
    const [isTcc1EscolheuReferenciasChecked, setIsTcc1EscolheuReferenciasChecked] = React.useState(false);

    const [isTcc1EscolheuCronograma, setIsTcc1EscolheuCronograma] = React.useState(false);
    const [isTcc1EscolheuCronogramaChecked, setIsTcc1EscolheuCronogramaChecked] = React.useState(false);

    const [isTcc1EntregouProjetoNoPrazo, setIsTcc1EntregouProjetoNoPrazo] = React.useState(false);
    const [isTcc1EntregouProjetoNoPrazoChecked, setIsTcc1EntregouProjetoNoPrazoChecked] = React.useState(false);

    const [isTcc1PassouPelaAvaliacao, setIsTcc1PassouPelaAvaliacao] = React.useState(false);
    const [isTcc1PassouPelaAvaliacaoChecked, setIsTcc1PassouPelaAvaliacaoChecked] = React.useState(false);

    const [isTcc1AplicouCorrecoes, setIsTcc1AplicouCorrecoes] = React.useState(false);
    const [isTcc1AplicouCorrecoesChecked, setIsTcc1AplicouCorrecoesChecked] = React.useState(false);

    const [isTcc1AprovacaoEmTCCI, setIsTcc1AprovacaoEmTCCI] = React.useState(false);
    const [isTcc1AprovacaoEmTCCIChecked, setIsTcc1AprovacaoEmTCCIChecked] = React.useState(false);

    const [isTcc2RealizouMatriculaEmTCCII, setIsTcc2RealizouMatriculaEmTCCII] = React.useState(false);
    const [isTcc2RealizouMatriculaEmTCCIIChecked, setIsTcc2RealizouMatriculaEmTCCIIChecked] = React.useState(false);

    const [isTcc2PlanejouDataDefesaPublica, setIsTcc2PlanejouDataDefesaPublica] = React.useState(false);
    const [isTcc2PlanejouDataDefesaPublicaChecked, setIsTcc2PlanejouDataDefesaPublicaChecked] = React.useState(false);

    const [isTcc2ContinuidadeTrabalhosIniciadosEmTCCI, setIsTcc2ContinuidadeTrabalhosIniciadosEmTCCI] = React.useState(false);
    const [isTcc2ContinuidadeTrabalhosIniciadosEmTCCIChecked, setIsTcc2ContinuidadeTrabalhosIniciadosEmTCCIChecked] = React.useState(false);

    const [isTcc2ElaborouPlanoDeTrabalho, setIsTcc2ElaborouPlanoDeTrabalho] = React.useState(false);
    const [isTcc2ElaborouPlanoDeTrabalhoChecked, setIsTcc2ElaborouPlanoDeTrabalhoChecked] = React.useState(false);

    const [isTcc2EntregouPlanoDeTrabalho, setIsTcc2EntregouPlanoDeTrabalho] = React.useState(false);
    const [isTcc2EntregouPlanoDeTrabalhoChecked, setIsTcc2EntregouPlanoDeTrabalhoChecked] = React.useState(false);

    const [isTcc2BuscouTrabalhosSimilares, setIsTcc2BuscouTrabalhosSimilares] = React.useState(false);
    const [isTcc2BuscouTrabalhosSimilaresChecked, setIsTcc2BuscouTrabalhosSimilaresChecked] = React.useState(false);

    const [isTcc2BuscouFundamentacaoTeorica, setIsTcc2BuscouFundamentacaoTeorica] = React.useState(false);
    const [isTcc2BuscouFundamentacaoTeoricaChecked, setIsTcc2BuscouFundamentacaoTeoricaChecked] = React.useState(false);

    const [isTcc2DefiniuNaturezaDoTCC, setIsTcc2DefiniuNaturezaDoTCC] = React.useState(false);
    const [isTcc2DefiniuNaturezaDoTCCChecked, setIsTcc2DefiniuNaturezaDoTCCChecked] = React.useState(false);

    const [isTcc2ModelouSolucao, setIsTcc2ModelouSolucao] = React.useState(false);
    const [isTcc2ModelouSolucaoChecked, setIsTcc2ModelouSolucaoChecked] = React.useState(false);

    const [isTcc2ExecutouSolucao, setIsTcc2ExecutouSolucao] = React.useState(false);
    const [isTcc2ExecutouSolucaoChecked, setIsTcc2ExecutouSolucaoChecked] = React.useState(false);

    const [isTcc2AvaliouSolucao, setIsTcc2AvaliouSolucao] = React.useState(false);
    const [isTcc2AvaliouSolucaoChecked, setIsTcc2AvaliouSolucaoChecked] = React.useState(false);

    const [isTcc2PlanejouOutrosDoisMembrosDaBanca, setIsTcc2PlanejouOutrosDoisMembrosDaBanca] = React.useState(false);
    const [isTcc2PlanejouOutrosDoisMembrosDaBancaChecked, setIsTcc2PlanejouOutrosDoisMembrosDaBancaChecked] = React.useState(false);

    const [isTcc2ConcluiuEscritaMonografia, setIsTcc2ConcluiuEscritaMonografia] = React.useState(false);
    const [isTcc2ConcluiuEscritaMonografiaChecked, setIsTcc2ConcluiuEscritaMonografiaChecked] = React.useState(false);

    const [isTcc2ElaborouMonografia, setIsTcc2ElaborouMonografia] = React.useState(false);
    const [isTcc2ElaborouMonografiaChecked, setIsTcc2ElaborouMonografiaChecked] = React.useState(false);

    const [isTcc2RevisouMonografia, setIsTcc2RevisouMonografia] = React.useState(false);
    const [isTcc2RevisouMonografiaChecked, setIsTcc2RevisouMonografiaChecked] = React.useState(false);

    const [isTcc2MonografiaIntroducao, setIsTcc2MonografiaIntroducao] = React.useState(false);
    const [isTcc2MonografiaIntroducaoChecked, setIsTcc2MonografiaIntroducaoChecked] = React.useState(false);

    const [isTcc2MonografiaCapitulo1, setIsTcc2MonografiaCapitulo1] = React.useState(false);
    const [isTcc2MonografiaCapitulo1Checked, setIsTcc2MonografiaCapitulo1Checked] = React.useState(false);

    const [isTcc2MonografiaCapitulo2, setIsTcc2MonografiaCapitulo2] = React.useState(false);
    const [isTcc2MonografiaCapitulo2Checked, setIsTcc2MonografiaCapitulo2Checked] = React.useState(false);

    const [isTcc2MonografiaCapitulo3, setIsTcc2MonografiaCapitulo3] = React.useState(false);
    const [isTcc2MonografiaCapitulo3Checked, setIsTcc2MonografiaCapitulo3Checked] = React.useState(false);

    const [isTcc2MonografiaCapitulo4, setIsTcc2MonografiaCapitulo4] = React.useState(false);
    const [isTcc2MonografiaCapitulo4Checked, setIsTcc2MonografiaCapitulo4Checked] = React.useState(false);

    const [isTcc2MonografiaConclusao, setIsTcc2MonografiaConclusao] = React.useState(false);
    const [isTcc2MonografiaConclusaoChecked, setIsTcc2MonografiaConclusaoChecked] = React.useState(false);

    const [isTcc2ProfessorRevisouMonografia, setIsTcc2ProfessorRevisouMonografia] = React.useState(false);
    const [isTcc2ProfessorRevisouMonografiaChecked, setIsTcc2ProfessorRevisouMonografiaChecked] = React.useState(false);

    const [isTcc2ProfessorDeuAval, setIsTcc2ProfessorDeuAval] = React.useState(false);
    const [isTcc2ProfessorDeuAvalChecked, setIsTcc2ProfessorDeuAvalChecked] = React.useState(false);

    const [isTcc2MonografiaAplicouCorrecoes, setIsTcc2MonografiaAplicouCorrecoes] = React.useState(false);
    const [isTcc2MonografiaAplicouCorrecoesChecked, setIsTcc2MonografiaAplicouCorrecoesChecked] = React.useState(false);

    const [isTcc2MarcouDataDefesaPublica, setIsTcc2MarcouDataDefesaPublica] = React.useState(false);
    const [isTcc2MarcouDataDefesaPublicaChecked, setIsTcc2MarcouDataDefesaPublicaChecked] = React.useState(false);

    const [isTcc2EscolheuOutrosDoisMembrosBanca, setIsTcc2EscolheuOutrosDoisMembrosBanca] = React.useState(false);
    const [isTcc2EscolheuOutrosDoisMembrosBancaChecked, setIsTcc2EscolheuOutrosDoisMembrosBancaChecked] = React.useState(false);

    const [isTcc2EntregouCopiaDaMonografiaABanca, setIsTcc2EntregouCopiaDaMonografiaABanca] = React.useState(false);
    const [isTcc2EntregouCopiaDaMonografiaABancaChecked, setIsTcc2EntregouCopiaDaMonografiaABancaChecked] = React.useState(false);

    const [isTcc2DefendeuPublicamenteTCC, setIsTcc2DefendeuPublicamenteTCC] = React.useState(false);
    const [isTcc2DefendeuPublicamenteTCCChecked, setIsTcc2DefendeuPublicamenteTCCChecked] = React.useState(false);

    const [isTcc2AplicouCorrecoesRequeridasPelaBanca, setIsTcc2AplicouCorrecoesRequeridasPelaBanca] = React.useState(false);
    const [isTcc2AplicouCorrecoesRequeridasPelaBancaChecked, setIsTcc2AplicouCorrecoesRequeridasPelaBancaChecked] = React.useState(false);

    const [isTcc2EntregouVersaoFinalDaMonografia, setIsTcc2EntregouVersaoFinalDaMonografia] = React.useState(false);
    const [isTcc2EntregouVersaoFinalDaMonografiaChecked, setIsTcc2EntregouVersaoFinalDaMonografiaChecked] = React.useState(false);

    const [isTcc2AprovacaoTCCII, setIsTcc2AprovacaoTCCII] = React.useState(false);
    const [isTcc2AprovacaoTCCIIChecked, setIsTcc2AprovacaoTCCIIChecked] = React.useState(false);

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
          Exterminador de TCC
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
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1EscolherProfessorChecked}
                      onChange={() => {
                          setIsTcc1EscolherProfessorChecked((prev) => !prev);
                      }}
                  />
                }
                label="Escolheu professor-orientador da área de interesse?"
            />
              <div style={{ display: "block", padding: 30 }}>
                  <h3>Subtarefas:</h3>

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolherCoorientadorChecked}
                              onChange={() => {
                                  setIsTcc1EscolherCoorientadorChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu coorientador?"
                  />
              </div>

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1MatriculaChecked}
                      onChange={() => {
                          setIsTcc1MatriculaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Realizou matrícula em TCC I com o professor-orientador?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1TemaChecked}
                      onChange={() => {
                          setIsTcc1TemaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Decidiu em comum acordo com o professor-orientador o tema?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1DataDaAvaliacaoChecked}
                      onChange={() => {
                          setIsTcc1DataDaAvaliacaoChecked((prev) => !prev);
                      }}
                  />
                }
                label="Marcou data da avaliação?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1EstudouMetodologiaChecked}
                      onChange={() => {
                          setIsTcc1EstudouMetodologiaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Estudou as técnicas de elaboração do TCC de acordo com uma metodologia científica?"
            />
              <div style={{ display: "block", padding: 30 }}>
                  <h3>Subtarefas:</h3>

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1ElaborouPlanoDeTrabalhoChecked}
                              onChange={() => {
                                  setIsTcc1ElaborouPlanoDeTrabalhoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Elaborou o Plano de Trabalho?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1BuscouTrabalhosSimilaresChecked}
                              onChange={() => {
                                  setIsTcc1BuscouTrabalhosSimilaresChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Buscou por trabalhos similares ou correlatos?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1ElaborouCronogramaChecked}
                              onChange={() => {
                                  setIsTcc1ElaborouCronogramaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Criou cronograma?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EntregouPlanoDeTrabalhoChecked}
                              onChange={() => {
                                  setIsTcc1EntregouPlanoDeTrabalhoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Entregou o Plano de Trabalho ao professor-orientador?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuPressupostosChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuPressupostosChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu os pressupostos?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuProblematicaChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuProblematicaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu a problemática / justificativa?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuProblemaDePesquisaChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuProblemaDePesquisaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu o problema de pesquisa?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuHipoteseChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuHipoteseChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu a hipótese?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuObjetivoGeralChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuObjetivoGeralChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu o objetivo geral?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuObjetivoEspecificosChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuObjetivoEspecificosChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu os objetivos específicos?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuPassosMetodologicosChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuPassosMetodologicosChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu os passos metodológicos?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuEtapasChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuEtapasChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu as etapas?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuTecnicasChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuTecnicasChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu as técnicas?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1DefiniuResultadosEsperadosChecked}
                              onChange={() => {
                                  setIsTcc1DefiniuResultadosEsperadosChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu os resultados esperados?"
                  />
              </div>

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1DeuInicioAtividadesDeEstudoChecked}
                      onChange={() => {
                          setIsTcc1DeuInicioAtividadesDeEstudoChecked((prev) => !prev);
                      }}
                  />
                }
                label="Deu início às atividades de estudo, levantamento bibliográfico e pesquisa de campo, se assim for o caso?"
            />
              <div style={{ display: "block", padding: 30 }}>
                  <h3>Subtarefas:</h3>

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1BuscouFundamentacaoTeoricaChecked}
                              onChange={() => {
                                  setIsTcc1BuscouFundamentacaoTeoricaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Buscou por fundamentação teórica?"
                  />
              </div>

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1ProduziuProjetoChecked}
                      onChange={() => {
                          setIsTcc1ProduziuProjetoChecked((prev) => !prev);
                      }}
                  />
                }
                label="Produziu o projeto instruído pelo professor-orientador?"
            />
              <div style={{ display: "block", padding: 30 }}>
                  <h3>Subtarefas:</h3>

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuTemaChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuTemaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu o Tema?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuProblemaChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuProblemaChecked  ((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu o Problema / Motivação /Justificativa (POR QUE)?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuObjetivoGeralEEspecificosChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuObjetivoGeralEEspecificosChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu o Objetivo Geral e Específicos (O QUE)?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuMetodologiaChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuMetodologiaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu a Metodologia (COMO)?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuRevisaoDaLiteraturaChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuRevisaoDaLiteraturaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu a Revisão da literatura (conceitos / background)?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuTrabalhosRelacionadosChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuTrabalhosRelacionadosChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu os Trabalhos relacionados?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuReferenciasChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuReferenciasChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu as Referências (QUEM)?"
                  />

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc1EscolheuCronogramaChecked}
                              onChange={() => {
                                  setIsTcc1EscolheuCronogramaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Escolheu o Cronograma (QUANDO)?"
                  />
              </div>

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1EntregouProjetoNoPrazoChecked}
                      onChange={() => {
                          setIsTcc1EntregouProjetoNoPrazoChecked((prev) => !prev);
                      }}
                  />
                }
                label="Entregou ao professor-orientador o projeto no prazo estabelecido?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1PassouPelaAvaliacaoChecked}
                      onChange={() => {
                          setIsTcc1PassouPelaAvaliacaoChecked((prev) => !prev);
                      }}
                  />
                }
                label="Passou pela avaliação do professor-orientador?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1AplicouCorrecoesChecked}
                      onChange={() => {
                          setIsTcc1AplicouCorrecoesChecked((prev) => !prev);
                      }}
                  />
                }
                label="Aplicou as correções requeridas?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc1AprovacaoEmTCCIChecked}
                      onChange={() => {
                          setIsTcc1AprovacaoEmTCCIChecked((prev) => !prev);
                      }}
                  />
                }
                label="Teve aprovação em TCC I?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2RealizouMatriculaEmTCCIIChecked}
                      onChange={() => {
                          setIsTcc2RealizouMatriculaEmTCCIIChecked((prev) => !prev);
                      }}
                  />
                }
                label="Realizou matrícula em TCC II com o professor-orientador?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2PlanejouDataDefesaPublicaChecked}
                      onChange={() => {
                          setIsTcc2PlanejouDataDefesaPublicaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Planejou data da defesa pública?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2ContinuidadeTrabalhosIniciadosEmTCCIChecked}
                      onChange={() => {
                          setIsTcc2ContinuidadeTrabalhosIniciadosEmTCCIChecked((prev) => !prev);
                      }}
                  />
                }
                label="Deu continuidade dos trabalhos iniciados em TCC I?"
            />
              <div style={{ display: "block", padding: 30 }}>
                  <h3>Subtarefas:</h3>

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2ElaborouPlanoDeTrabalhoChecked}
                              onChange={() => {
                                  setIsTcc2ElaborouPlanoDeTrabalhoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Elaborou o Plano de Trabalho?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2EntregouPlanoDeTrabalhoChecked}
                              onChange={() => {
                                  setIsTcc2EntregouPlanoDeTrabalhoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Entregou o Plano de Trabalho?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2BuscouTrabalhosSimilaresChecked}
                              onChange={() => {
                                  setIsTcc2BuscouTrabalhosSimilaresChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Buscou por trabalhos similares ou correlatos?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2BuscouFundamentacaoTeoricaChecked}
                              onChange={() => {
                                  setIsTcc2BuscouFundamentacaoTeoricaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Buscou por fundamentação teórica?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2DefiniuNaturezaDoTCCChecked}
                              onChange={() => {
                                  setIsTcc2DefiniuNaturezaDoTCCChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Definiu a natureza do TCC (trabalho empírico-teórico, trabalho de revisão literária sobre determinado tema, trabalho original de pesquisa, desenvolvimento de sistemas ou softwares, trabalho fruto de intercâmbios em instituições exteriores, desenvolvimento de projetos em empresas, desde que não possuam cláusula de confidencialidade)?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2ModelouSolucaoChecked}
                              onChange={() => {
                                  setIsTcc2ModelouSolucaoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Modelou a solução proposta?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2ExecutouSolucaoChecked}
                              onChange={() => {
                                  setIsTcc2ExecutouSolucaoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Executou a solução proposta?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2AvaliouSolucaoChecked}
                              onChange={() => {
                                  setIsTcc2AvaliouSolucaoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Avaliou a solução proposta?"
                  />
              </div>

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2PlanejouOutrosDoisMembrosDaBancaChecked}
                      onChange={() => {
                          setIsTcc2PlanejouOutrosDoisMembrosDaBancaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Planejou junto com o orientador os outros dois membros da Banca?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2ConcluiuEscritaMonografiaChecked}
                      onChange={() => {
                          setIsTcc2ConcluiuEscritaMonografiaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Concluiu a escrita da monografia em inglês ou português?"
            />

              <div style={{ display: "block", padding: 30 }}>
                  <h3>Subtarefas:</h3>

                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2ElaborouMonografiaChecked}
                              onChange={() => {
                                  setIsTcc2ElaborouMonografiaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Elaborou a monografia?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2RevisouMonografiaChecked}
                              onChange={() => {
                                  setIsTcc2RevisouMonografiaChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Revisou a monografia?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2MonografiaIntroducaoChecked}
                              onChange={() => {
                                  setIsTcc2MonografiaIntroducaoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Introdução: Motivação, Objetivos está pronta?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2MonografiaCapitulo1Checked}
                              onChange={() => {
                                  setIsTcc2MonografiaCapitulo1Checked((prev) => !prev);
                              }}
                          />
                      }
                      label="Capítulo 1 - Fundamentação Teórica está pronto?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2MonografiaCapitulo2Checked}
                              onChange={() => {
                                  setIsTcc2MonografiaCapitulo2Checked((prev) => !prev);
                              }}
                          />
                      }
                      label="Capítulo 2 - Trabalhos Correlatos está pronto?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2MonografiaCapitulo3Checked}
                              onChange={() => {
                                  setIsTcc2MonografiaCapitulo3Checked((prev) => !prev);
                              }}
                          />
                      }
                      label="Capítulo 3 - Solução está pronto?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2MonografiaCapitulo4Checked}
                              onChange={() => {
                                  setIsTcc2MonografiaCapitulo4Checked((prev) => !prev);
                              }}
                          />
                      }
                      label="Capítulo 4 - Avaliação e Resultados está pronto?"
                  />
                  <FormControlLabel
                      control={
                          <Switch
                              checked={isTcc2MonografiaConclusaoChecked}
                              onChange={() => {
                                  setIsTcc2MonografiaConclusaoChecked((prev) => !prev);
                              }}
                          />
                      }
                      label="Conclusão, Abstract e Introdução: Estrutura do trabalho está pronto?"
                  />
              </div>

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2ProfessorRevisouMonografiaChecked}
                      onChange={() => {
                          setIsTcc2ProfessorRevisouMonografiaChecked((prev) => !prev);
                      }}
                  />
                }
                label="O professor-orientador revisou a monografia?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2ProfessorDeuAvalChecked}
                      onChange={() => {
                          setIsTcc2ProfessorDeuAvalChecked((prev) => !prev);
                      }}
                  />
                }
                label="Conseguiu o aval do professor-orientador?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2MonografiaAplicouCorrecoesChecked}
                      onChange={() => {
                          setIsTcc2MonografiaAplicouCorrecoesChecked((prev) => !prev);
                      }}
                  />
                }
                label="Aplicou as correções requeridas?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2MarcouDataDefesaPublicaChecked}
                      onChange={() => {
                          setIsTcc2MarcouDataDefesaPublicaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Marcou a data da defesa pública?"
            />

            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2EscolheuOutrosDoisMembrosBancaChecked}
                      onChange={() => {
                          setIsTcc2EscolheuOutrosDoisMembrosBancaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Escolheu junto com o orientador os outros dois membros da Banca?"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2EntregouCopiaDaMonografiaABancaChecked}
                      onChange={() => {
                          setIsTcc2EntregouCopiaDaMonografiaABancaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Entregou cópia da monografia a cada membro da Banca no prazo de 15 dias antes da data da defesa pública?"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2DefendeuPublicamenteTCCChecked}
                      onChange={() => {
                          setIsTcc2DefendeuPublicamenteTCCChecked((prev) => !prev);
                      }}
                  />
                }
                label="Defendeu publicamente o TCC perante a Banca até o último dia de aula. Se de BSI, entre 20 e 40 minutos. Se de BCC, até 20 minutos?"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2AplicouCorrecoesRequeridasPelaBancaChecked}
                      onChange={() => {
                          setIsTcc2AplicouCorrecoesRequeridasPelaBancaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Aplicou as correções requeridas pela Banca?"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2EntregouVersaoFinalDaMonografiaChecked}
                      onChange={() => {
                          setIsTcc2EntregouVersaoFinalDaMonografiaChecked((prev) => !prev);
                      }}
                  />
                }
                label="Entregou versão final da monografia para a Banca e para o setor indicado pelo Colegiado?"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={isTcc2AprovacaoTCCIIChecked}
                      onChange={() => {
                          setIsTcc2AprovacaoTCCIIChecked((prev) => !prev);
                      }}
                  />
                }
                label="Teve aprovação em TCC II?"
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
