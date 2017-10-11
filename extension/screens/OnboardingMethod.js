import React from 'react';
import { Logo } from 'style';
import { H1, P, Button } from 'style';
import { goTo } from 'route-lite';
import ManualEntry from './ManualEntry';
import SyncComplete from './SyncComplete';

export default class OnboardingWelcome extends React.Component {
  handleManualEntry() {
    goTo(ManualEntry);
  }

  handleSyncMeasurements() {
    goTo(SyncComplete);
  }

  render() {
    return (
      <div>
        <Logo src="icon.png" />
        <H1>Shuya,</H1>
        <P>You're almost there!</P>
        <P>Sync or enter your measurements to start shopping</P>
        <Button onClick={this.handleSyncMeasurements}>Sync with tailor</Button>
        <Button onClick={this.handleManualEntry}>Enter measurements</Button>
      </div>
    );
  }
}
