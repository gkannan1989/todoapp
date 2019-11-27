import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; 
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));
/**
 * Function represents the MySnackbarContentWrapper component
 * @memberOf components.MySnackbarContentWrapper
 * @function MySnackbarContentWrapper
 * @description It render SnackbarContent along with customized string 
 * @param {object}   props     - props of component that were given by parent
 * @return {jsx} - jsx component to show 
 * @example
 * <MySnackbarContentWrapper
    variant={props.variant}
    className={classes.margin}
    message={props.message}
    onClose={() => props.onClose()} 
    />
 */
function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}
/**
 * @memberOf components.MySnackbarContentWrapper
 * @name propTypes
 * @type {object}
 * @description defines prop types of MySnackbarContentWrapper
 * @property {string}         [className]   -  style to apply for the snakbar wrapper
 * @property {string}         [message]   -  message to be appeared on the snakbar
 * @property {func}         [onClose]   -  function which gets invoked when tapping close on snakbar
 * @property {string}         [variant]   -  snakbar variant behavior(success, warning.. etc) 
 */
MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
/**
 * Function represents the Notification component
 * @memberOf components.Notification
 * @function Notification
 * @description It render Notification 
 * @param {object}   props     - props of component that were given by parent
 * @return {jsx} - jsx component to show 
 * @example
 *  <Notification
      variant={message.type} 
      onClose={notify()}
      message={message}
      />
 */
export default function Notification(props) {
  const classes = useStyles2();  
  return (
    <div>  
       <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={true}
        autoHideDuration={1800} 
        onClose={() => props.onClose()}
      >
        <MySnackbarContentWrapper
          variant={props.variant}
          className={classes.margin}
          message={props.message}
          onClose={() => props.onClose()} 
        />
      </Snackbar>
    </div>
  );
}