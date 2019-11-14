import React, { memo } from "react";
import { Button, Paper, Grid, Typography } from "@material-ui/core"; 
import userImg from '../assets/img/userimage.png';
import listIcon from '../assets/img/list-ico.png';
 
const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  > 
    <Grid container spacing={0}>
        <Grid item xs={12} sm={3}>
           <Paper className="rightSideBar"> 
              <Typography> 
                <Button className={'userIcons'}>
                  <img className={'userImg'} src={userImg} alt={'user image'}/>
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

export default Layout;
