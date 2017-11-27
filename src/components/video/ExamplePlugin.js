import videojs from 'video.js';

const Plugin = videojs.getPlugin('plugin');

class ExamplePlugin extends Plugin {

  constructor(player, options) {
    super(player, options);

    if (options.customClass) {
      player.addClass(options.customClass);
    }

    player.on('playing', function() {
      videojs.log('playback began!');
    });

    player.on('pause', function() {
      videojs.log('playback paused!');
    });
  }
}

export default ExamplePlugin;
