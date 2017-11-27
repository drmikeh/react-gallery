export default [
  {
    id: 1,
    sources: 'qt-test-1.mp4',
    label: 'Quicktime Test',
    type: 'video/mp4',
    overlayConfig: {
      debug: false,
      overlays: [
        { start: 'pause', end: 'play', align: 'center'      , class: 'paused'   , content: 'Paused!' },
        { start:  0     , end:  10   , align: 'bottom-left' , class: 'overlay1' , content: 'This video was recorded with QuickTime.' },
      ]
    }
  },
  {
    id: 2,
    sources: 'crockonjs-6-hd.mp4',
    label: 'Crockford on JavaScript',
    type: 'video/mp4',
    overlayConfig: {
      debug: false,
      overlays: [
        // { content: 'The video is playing!', start: 'play', end: 'pause' },
        { start: 'pause', end: 'play', align: 'center'      , class: 'paused'   , content: 'Paused!' },
        { start:  8     , end: 15    , align: 'bottom-left' , class: 'overlay1' , content: 'This is Douglas Crockford.' },
        { start: 15     , end: 20    , align: 'bottom'      , class: 'overlay1' , content: 'He wrote "JavaScript: The Good Parts".' },
        { start: 20     , end: 25    , align: 'bottom-right', class: 'overlay1' , content: 'I hope you like this video.' },
      ]
    }
  },
  {
    id: 3,
    sources: 'GA-Demo-Day.mp4',
    label: 'GA Demo Day',
    type: 'video/mp4',
    overlayConfig: {
      debug: false,
      overlays: [
        { start: 'pause', end: 'play', align: 'center', class: 'paused'  , content: 'Paused!' },
        { start:  0     , end:  15   , align: 'bottom', class: 'overlay1', content: 'General Assembly DEMO DAY!!!' },
      ]
    }
  },
  {
    id: 4,
    sources: 'Mary_Poppins_Meets_the_Matrix.mp4',
    label: 'Mary Poppins Meets The Matrix',
    type: 'video/mp4',
    poster: 'Mary_Poppins_Meets_the_Matrix.png',
    overlayConfig: {
      debug: false,
      overlays: [
        { start: 'pause', end: 'play', align: 'center'      , class: 'paused'  , content: 'Paused!' },
        { start:  0     , end:  15   , align: 'bottom-right', class: 'overlay1', content: 'Overlays are fun!!!' },
      ]
    }
  },
  {
    id: 5,
    sources: 'oceans/video/oceans-clip.mp4',
    label: 'Oceans Clip',
    type: 'video/mp4',
    poster: 'oceans/img/chapter_1.png',
    overlayConfig: {
      debug: false,
      overlays: [
        { start: 'pause', end: 'play', align: 'center'      , class: 'paused'  , content: 'Paused!' },
        { start:  0     , end:  15   , align: 'bottom-left' , class: 'overlay1', content: 'Overlays are fun!!!' },
      ]
    },
    chapters: {
      label: 'English',
      language: 'en',
      src: 'oceans/vtt/chapters.vtt'
    }
  }
];
