import React, { memo } from "react";
import { Button, Paper, Grid, Typography } from "@material-ui/core"; 
import PropTypes from 'prop-types';
import userImg from '../assets/img/userimage.png';
import listIcon from '../assets/img/list-ico.png';
 
const Layout = memo(props => (
  <Paper
    elevation={0}
    className={"paperRightSide"} 
  > 
    <Grid container spacing={0}>
        <Grid item xs={12} sm={3}>
           <Paper className="rightSideBar"> 
              <Typography> 
                <Button className={'userIcons'}>
                  <img className={'userImg'} src={userImg} alt={"userpicture"}/>
                  &nbsp;{props.user && props.user.name}
                </Button>
              </Typography>
              <Typography className={'wrapperIcons'}> 
                <Button className={'userIcons TodoIcon'}>
                <img className={'userImg'} src={listIcon} alt={'list icon'}/>
                  &nbsp;{props.user && props.user.todo}
                </Button>
              </Typography>
           </Paper>
        </Grid>
        <Grid item xs={12} sm={9}> 
          {props.children} 
        </Grid>
      </Grid>
    
  </Paper>
));

Layout.propTypes = {
  user: PropTypes.object.isRequired
};

export default Layout;
