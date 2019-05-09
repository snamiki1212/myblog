import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import {Link} from 'gatsby';
import moment from 'moment';
import Media, {MediaOverlay} from 'react-md/lib/Media';
import PostCover from '../PostCover';
import config from '../../../data/SiteConfig';
import './PostPreview.scss';

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({mobile: false});
    } else {
      this.setState({mobile: true});
    }
  }

  render() {
    const {postInfo} = this.props;
    const {mobile} = this.state;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--6">
        <Link to={postInfo.path}>
          <Media style={{height: coverHeight, paddingBottom: '0px'}}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
            <MediaOverlay className="post-preview__overlay">
              <span className="post-preview__title">{postInfo.title}</span>
              {/* <CardTitle title={postInfo.title} style={{"color": "black"}} /> */}
            </MediaOverlay>
          </Media>
          <CardTitle
            title=""
            subtitle={`最終更新日: ${moment(postInfo.date).format(
              config.dateFormat
            )}`}
          />
          {/* <CardTitle subtitle={<PostTags tags={postInfo.tags} />} /> */}
          <CardText
            children={postInfo.excerpt}
            className="post-preview__excerpt"
          />
        </Link>
      </Card>
    );
  }
}

export default PostPreview;
