import React from 'react';
import Button from '@material-ui/core/Button';
import {SubPageContext} from '../../../gatsby-node_';

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
            <a href={path}>{`${name}(${count})`}</a>
          </Button>
        ))}
      </div>

      <hr />
      <div>
        {context.tags.map(({name, count, path}) => (
          <Button key={name}>
            <a href={path}>{`${name}(${count})`}</a>
          </Button>
        ))}
      </div>
    </div>
  );
};
