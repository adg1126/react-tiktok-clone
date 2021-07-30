import { connect } from 'react-redux';
import { fetchVideosStart } from '../redux/videos/videosActions';
import { createStructuredSelector } from 'reselect';
import { selectVideosArr } from '../redux/videos/videosSelectors';
import App from '../App';

const mapStateToProps = createStructuredSelector({
  videos: selectVideosArr
});

export default connect(mapStateToProps, { fetchVideosStart })(App);
