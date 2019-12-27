import React from 'react';
import iconTeam from './images/icon-team.svg';

import Button from '../../components/Button';

const NoTeamView = () => {
  return (
    <div className="no-team-container">
      <div className="no-team-subcontainer">
        <img src={iconTeam} alt="" />
        <h1 className="no-team-header">Invite your team</h1>
        <h2 className="no-team-sub-header">
          Add your first team member to get started
        </h2>
        <Button>Add Team Member</Button>
      </div>
    </div>
  );
};

export default NoTeamView;
