import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';

function Footer() {
  return (
    <div>
      <Divider />
      <Typography variant="body1">
        SkyPro 2021
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="" target="_blank" rel="noopener">
          SkyPro Course
        </Link>
      </Typography>
    </div>
  );
}
export default Footer;