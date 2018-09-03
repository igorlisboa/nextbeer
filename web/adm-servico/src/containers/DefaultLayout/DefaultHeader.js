import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {AppSidebarToggler} from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/**
        * Logo ao lado do menu
*/}
        {/*<AppNavbarBrand*/}
          {/*full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}*/}
          {/*minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}*/}
        {/*/>*/}
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
