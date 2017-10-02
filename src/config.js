// GitHub Pages will use a baseUrl of `drmikeh.github.com/react-gallery` so we
// need to set the basename to include the `/react-gallery` prefix.
// Otherwise we use an empty string for the basename.
const basename = window.location.hostname.includes('github') ? '/react-gallery' : '';

export default {
  basename
};
