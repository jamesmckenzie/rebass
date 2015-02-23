
// Theme mixin

module.exports = {

  getThemeClasses: function() {

    var theme = this.props.theme;
    var classes = {};
    classes.border = false;
    classes.main = '';

    switch (theme) {
      case 'white':
        classes.main = 'bg-white';
        classes.border = true;
        break;
      case 'light-gray':
        classes.main = 'bg-light-gray';
        classes.border = true;
        break;
      case 'yellow':
        classes.main = 'bg-yellow';
        break;
      case 'blue':
        classes.main = 'white bg-blue';
        break;
      case 'green':
        classes.main = 'white bg-green';
        break;
      case 'red':
        classes.main = 'white bg-red';
        break;
      case 'dark-gray':
        classes.main = 'white bg-dark-gray';
        break;
      default:
        classes.main = 'bg-lighter-gray';
        classes.border = true;
        break;
    }

    return classes;

  },

  isInverse: function() {
    switch (this.props.theme) {
      case 'white':
      case 'light-gray':
      case 'lighter-gray':
      case 'yellow':
        return false;
        break;
      case 'blue':
      case 'green':
      case 'red':
      case 'dark-gray':
        return true;
        break;
      default:
        return false;
        break;
    }
  },

  caretStyle: {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: 3,
    verticalAlign: 'middle',
    borderTop: '7px solid',
    borderRight: '5px solid transparent',
    borderLeft: '5px solid transparent',
  },

  buttonStyle: {
    display: 'inline-block',
    fontWeight: 'bold',
    color: 'inherit',
    backgroundColor: 'transparent',
  },

};

