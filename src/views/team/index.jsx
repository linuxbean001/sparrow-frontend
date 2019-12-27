import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './team.css';

import Dashboard from '../dashboard';
import Button from '../../components/Button';

import useModal from '../../hooks/components/modal';
import ActionModal from '../../components/modals/action';

import AddTeamMemberView from './addteam';
import NoTeamView from './noteam';

import Store from '../../store';
import API from '../../api';

const TeamView = () => {
  const [modalActionShowing, setModalActionShowing] = useState(0);
  const [modalMode, setModalMode] = useState(0);
  const [team, setTeam] = useState(0);
  const [modalMessage, setModalMessage] = useState(0);
  const [deleteUserId, setDeleteUserId] = useState(0);
  const { handleModalOpen, handleModalClose, Modal } = useModal();
  const user = Store.get('user');

  const modalActionClosed = () => {
    setModalActionShowing(false);
  };

  function deleteUserById(id) {
    API.user.delete({ id }, () => {
      modalActionClosed();
    });
  }

  if (!team) {
    setTeam(Store.get('team'));
    if (!team) setTeam([]);
  } else {
    // get all users associated with this user
    API.user.get({ id: null }, res => {
      Store.set('team', res.data);
      setTeam(res.data);
    });
  }

  const Team = () => {
    let displayTeam = [];
    team.forEach((member, i) => {
      const removeMessage = `Are you sure you want to remove ${member.first_name} ${member.last_name}?`;
      displayTeam.push(
        <tr key={i}>
          <td>{`${member.first_name} ${member.last_name}`}</td>
          <td />
          <td>{member.invited_on_date}</td>
          <td>
            <Link
              to="#edit"
              onClick={() => {
                setModalMode(true);
                handleModalOpen();
              }}
            >
              Edit
            </Link>
            {user.user_id == member.user_id ? null : (
              <Link
                to="#remove"
                onClick={() => {
                  setDeleteUserId(member.user_id);
                  setModalMessage(removeMessage);
                  setModalActionShowing(true);
                }}
              >
                Remove
              </Link>
            )}
          </td>
        </tr>
      );
    });
    return displayTeam;
  };

  return (
    <Dashboard>
      <Modal>
        <AddTeamMemberView edit={modalMode} onComplete={handleModalClose} />
      </Modal>
      <Modal showModal={modalActionShowing} onClose={modalActionClosed}>
        <ActionModal
          question={modalMessage}
          primaryButtonCaption="Remove Member"
          secondaryButtonCaption="Keep Member"
          onResult={Result => {
            if (Result === 'primary') {
              deleteUserById(deleteUserId);
            } else {
              modalActionClosed();
            }
          }}
        />
      </Modal>
      <div className="team-container">
        <h1 className="team-header">Team</h1>
        {team ? (
          <Button
            onClick={() => {
              setModalMode(false);
              handleModalOpen();
            }}
            style={{ marginTop: '10px', float: 'right', width: '181px' }}
          >
            Add Team Member
          </Button>
        ) : null}
        {team ? (
          <table className="team-table">
            <thead>
              <tr>
                <th>Team Member</th>
                <th>Clients</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{Team()}</tbody>
          </table>
        ) : (
          <NoTeamView />
        )}
      </div>
    </Dashboard>
  );
};

export default TeamView;
