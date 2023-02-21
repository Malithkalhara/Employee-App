import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'white',
    fontSize: '1rem'
  },
  deleteButton: {
    backgroundColor: 'red !important',
  },
  editButton: {
    backgroundColor: 'green !important'
  },
  actionBar: {
    display: 'flex',
    justifyContent: "flex-end"
  },
  text: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    paddingBottom: '0.5em'
  }
}));

export default useStyles;