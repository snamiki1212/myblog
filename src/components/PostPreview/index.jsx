import React, {Component} from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import {Link} from 'gatsby';
import moment from 'moment';
import Media, {MediaOverlay} from 'react-md/lib/Media';
import styled from 'styled-components';
import PostCover from '../PostCover';
import config from '../../../data/SiteConfig';
import {colors} from '../../../data/color';

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

    const Excerpt = styled(CardText)`
      position: relative;
      &::after {
        content: '';
        display: block;

        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.9) 50%,
          rgba(255, 255, 255, 1)
        );
        height: 100px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    `;

    const Overlay = styled(MediaOverlay)`
      display: flex;
      align-items: center;
      justify-content: center;

      // MEMO: background-color -> $md-media-overlay-color
      height: 100%;
      padding: 0 20px;
    `;

    const Title = styled.span`
      color: ${colors['fc-white-1']};
      font-size: 24px;
      font-family: 'TsukuBRdGothic-Regular', 'Wawati SC', 'HanziPen TC',
        'HanziPen SC', 'Hannotate TC', 'MS UI Gothic',
        'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
      font-weight: 900;
      text-align: center;
    `;

    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--6">
        <Link to={postInfo.path}>
          <Media style={{height: coverHeight, paddingBottom: '0px'}}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
            <Overlay>
              <Title>{postInfo.title}</Title>
              {/* <CardTitle title={postInfo.title} style={{"color": "black"}} /> */}
            </Overlay>
          </Media>
          <CardTitle
            title=""
            subtitle={`最終更新日: ${moment(postInfo.date).format(
              config.dateFormat
            )}`}
          />
          {/* <CardTitle subtitle={<PostTags tags={postInfo.tags} />} /> */}
          <Excerpt>{postInfo.excerpt}</Excerpt>
        </Link>
      </Card>
    );
  }
}

export default PostPreview;
