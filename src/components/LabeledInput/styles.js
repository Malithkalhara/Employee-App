import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    display: 'flex',
    justifyItems: "center",
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    paddingRight: '2em',
    width: '6em'
  },
  container: {
    display: 'flex',
    justifyItems: 'center',
    paddingBottom: "1.5em"
  }
}));

export default useStyles;