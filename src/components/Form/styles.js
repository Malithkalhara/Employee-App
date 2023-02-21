import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center'
  },
  card: {
    padding: '3em',
    borderRadius: 25
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    width: '10em'
  }
}));

export default useStyles;