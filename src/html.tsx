/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';

// const inlinedStyles = '';

export default class HTML extends React.Component<{
  // MEMO: gatsby の props ?
  headComponents: any;
  body: any;
  postBodyComponents: any;
}> {
  render = (): any => {
    let css;

    // TODO:
    // if (process.env.NODE_ENV === 'production') {
    // css = (
    //   <style
    //     id="gatsby-inlined-css"
    //     dangerouslySetInnerHTML={{__html: inlinedStyles}}
    //   />
    // );
    // }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" /*href={favicon}*/ />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  };
}
