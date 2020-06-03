
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TimeAgo from 'react-timeago'
import germanStrings from 'react-timeago/lib/language-strings/de'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(germanStrings);

const Ago = ({ time }) => {
  return <Box alignSelf="flex-end">
    <Typography variant="caption" color="inherit">
      <TimeAgo date={time} formatter={formatter} />
    </Typography>
  </Box>
}

export default Ago;


