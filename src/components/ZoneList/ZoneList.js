import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../';

// TODO GENERATE KEY FOR CARD BASED ON GMT + LOCATION

const ZoneList = ({ zones }) => (
  <div>
    {zones.map(zone => <Card gmt={zone.gmt} location={zone.location} />)}
  </div>
);

ZoneList.defaultProps = {
  zones: [],
};

ZoneList.propTypes = {
  zones: PropTypes.arrayOf(
    PropTypes.shape({
      gmt: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ),
};

export default ZoneList;
