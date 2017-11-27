import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

// import 'videojs-chapter-thumbnails/dist/videojs.chapter-thumbnails.js';
import ChapterThumbnails from './videojs-chapter-thumbnails/src/videojs-chapter-thumbnail';
import 'videojs-chapter-thumbnails/dist/videojs.chapter-thumbnails.css';

// import 'videojs-overlay/dist/videojs-overlay.min.js';
// import Overlay from 'videojs-overlay/src/plugin.js';
import OverlayPlugin from './OverlayPlugin';
// import 'videojs-overlay/dist/videojs-overlay.css';

import ExamplePlugin from './ExamplePlugin';

videojs.registerPlugin('examplePlugin', ExamplePlugin);
videojs.registerPlugin('OverlayPlugin', OverlayPlugin);

export default class VideoPlayer extends React.Component {

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('onPlayerReady');

      if (this.props.chapters) {
        console.log('chapters:', this.props.chapters);
        this.player.chapter_thumbnails(this.props.chapters);
      }
    });

    this.player.examplePlugin({customClass: 'example-class'});

    if (this.props.overlayConfig) {
      this.player.overlay(this.props.overlayConfig);
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player className="vjs-fluid video">
        <video ref={ node => this.videoNode = node } className="video-js"></video>
      </div>
    );
  }
}
