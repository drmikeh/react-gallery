import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';
import videos from './videos';
import './video.css';

class VideoApp extends React.Component {

  render() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      fluid: true
    };
    const videoPanels = videos.map( video => {
      return (
        <Col lg={9} key={ video.id } >
          <Panel header={ video.label } className='video'>
            <VideoPlayer
              { ...videoJsOptions }
              { ...video }
            />
          </Panel>
        </Col>
      );
    })

    return (
      <div>
        <h1>Videos</h1>
        <Grid>
          <Row>
            {videoPanels}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default VideoApp;
