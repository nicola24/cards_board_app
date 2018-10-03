import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const cardStyle = (color) => {
  const style = {
    width: 250,
    height: 250,
  };

  switch (color) {
    case 'orange':
      style.backgroundColor = orange[500];
      break;
    case 'blue':
      style.backgroundColor = blue[500];
      break;
    case 'pink':
      style.backgroundColor = pink[500];
      break;
    case 'green':
      style.backgroundColor = green[500];
      break;
    default:
      style.backgroundColor = yellow[500];
      break;
  }
  return style;
};

export default cardStyle;
