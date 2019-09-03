import React from 'react';
import Button from '@material-ui/core/Button';
import {SubPageContext} from '../../../gatsby-node_';
import {Link} from 'gatsby';

export const SubPageLinks = ({
  context,
}: {
  context: SubPageContext;
}): JSX.Element => {
  return (
    <div>
      <div>
        {context.categories.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>{`${name}(${count})`}</Link>
          </Button>
        ))}
      </div>

      <hr />
      <div>
        {context.tags.map(({name, count, path}) => (
          <Button key={name}>
            <Link to={path}>{`${name}(${count})`}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
