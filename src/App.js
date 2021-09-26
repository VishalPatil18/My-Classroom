import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import header_logo from './img/icon.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from "@material-ui/core";

function App(){
  const [inCall, setInCall] = useState(false);
  const style = {
    width: "100",
    height: "100"
  }
  return (
    <div className="App" style={{height: "100%"}}>
      <header>
        <Grid 
          container
          className="component-header"
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <img style={style} src={header_logo}></img>  
          <Grid
            container
            item xs={10}
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
              <a className="menu-item" href={'https://github.com/SpecTEviL'}><GitHubIcon/></a>
              <a className="menu-item" href={'https://www.linkedin.com/in/vishalrameshpatil'}><LinkedInIcon/></a>
              <a className="menu-item" href={'https://twitter.com/VishalPatil1810'}><TwitterIcon/></a>
          </Grid>      
        </Grid>
      </header>
      <h1 style={{ margin: 0, fontSize: "45px" }}>My Classroom</h1>
      <p style={{ margin: 0, fontWeight: "200" }}>Now get a whole new experience of Online Tutoring with My Classroom.</p>
      
      <div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
          { inCall ? <VideoCall setInCall={setInCall} /> : (
            <Button 
              variant="contained" 
              color="primary" 
              onClick={ () => setInCall(true)}
              style={{ margin: "20px" }}
            >
              <AddIcon/>Join Class
            </Button>)
          }
        </div>
    </div>
  )
}

export default App;
