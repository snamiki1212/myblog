import React from 'react';
import Button from '@material-ui/core/Button';
import {SubPageContext} from '../../../gatsby-node_';
import {Link} from 'gatsby';

type Props = {context: SubPageContext};

export const SubPageLinks: React.FC<Props> = ({context}) => {
  return (
    <div style={{paddingTop: '50px'}}>
      <div style={{paddingBottom: '20px'}}>
        <div>▼カテゴリー</div>
        {context.categories.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>{`${name}(${count})`}</Link>
          </Button>
        ))}
      </div>

      <div>
        <div>▼タグ</div>
        {context.tags.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>
              <div>{`${name}(${count})`}</div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
