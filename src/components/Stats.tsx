import * as React from 'react';
import { Box } from './Box';
import { Typography } from '@material-ui/core';
import { Header } from './Header';
import { Row, RowProps } from './Row';
import { Column } from './Column';
import { SkillProgressBar } from './SkillProgressBar';
import { HealthBar } from './HealthBar';
import { Resurrections } from './Resurrections';

export const Stats = (rowProps: RowProps) => (
  <Row {...rowProps}>
    <Box direction="row" flex={3}>
      <Box flex={5}>
        <Resurrections />
        <HealthBar value={1} />
      </Box>
      <Box flex={4}>
        <Row>
          <img src={require('../assets/unseen-aid-icon.png')} height={50} />
          <Column>
            <Typography>Unseen Aid</Typography>
            <Typography>30%</Typography>
          </Column>
        </Row>
      </Box>
    </Box>
    <Box direction="row" flex={3}>
      <Box flex={5}>
        <Row flex={1}>
          <img src={require('../assets/vitality-icon.png')} height={23} />
          <Row flex={1} align="space-between">
            <Typography>Vitality</Typography>
            <Typography>15</Typography>
          </Row>
        </Row>
        <Row flex={1}>
          <img src={require('../assets/attack-icon.png')} height={23} />
          <Row flex={1} align="space-between">
            <Typography>Attack</Typography>
            <Typography>6</Typography>
          </Row>
        </Row>
      </Box>
      <Box
        flex={6}
        style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <Row style={{ width: '100%' }} align="space-between">
          <SkillProgressBar flex={1} points={1} value={0.67} />
          <Typography>9373</Typography>
        </Row>
        <Typography>to next Skill Point 1400</Typography>
      </Box>
    </Box>
    <Box flex={1} style={{ justifyContent: 'space-between' }}>
      <Box direction="row" style={{ justifyContent: 'space-between' }}>
        <img src={require('../assets/spirit-emblem-icon.png')} height={23} />
        <Typography>1/9 (0)</Typography>
      </Box>
      <Header>
        <Row align="space-between">
          <img src={require('../assets/money-icon.png')} height={23} />
          <Typography>362</Typography>
        </Row>
      </Header>
    </Box>
  </Row>
);
