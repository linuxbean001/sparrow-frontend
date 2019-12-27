import React from 'react';
import Select from 'react-select';

import Dashboard from '../dashboard';
import useModal from '../../hooks/components/modal';
import ReportCard from '../../components/ReportCard';

import './reports.css';

import downloadIcon from './images/icon-download.svg';
import iconFacebook from './images/icon-report-type-facebook.svg';
import iconInstagram from './images/icon-report-type-instagram.svg';
import iconTwitter from './images/icon-report-type-twitter.svg';
import iconReportTypeContent from './images/icon-report-type-content.svg';
import iconReportTypeEngagement from './images/icon-report-type-engagement.svg';
import iconReportTypeFollowers from './images/icon-report-type-followers.svg';
import iconReportTypePerformance from './images/icon-report-type-performance.svg';
import iconReportTypeQuickOverview from './images/icon-report-type-quick-overview.svg';

const Monthlyoptions = [
  { value: '0', label: 'All Social Channels' },
];

const Yearoptions =[
  { value: '0', label: 'May 2019' },
];

const ReportsView = () => {
  const { handleModalOpen, handleModalClose, Modal } = useModal();

  // state = {
  //   selectedOption: null,
  // };

  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // };

  const handleReportClick = () => {
    handleModalOpen();
  };
  //const { selectedOption } = this.state;
  return (
    <Dashboard>
      <Modal
        onClose={handleModalClose}
        modalName="Facebook Report"
        className="ReportModal"
      >
        <div className="ReportModal__header">Choose report type</div>
        <div className="ReportInfoCard__wrapper">
          <div className="ReportInfoCard" role="button" tabIndex="0">
            <div className="ReportInfoCard__info">
              <div className="ReportType__icon">
                <img src={iconReportTypePerformance} alt="Type" />
              </div>
              <div className="ReportInfoCard__content">
                <div className="ReportType__header">Performance Report</div>
                <div className="ReportInfoCard__date">September 2019</div>
              </div>
            </div>
          </div>
          <div className="ReportInfoCard" role="button" tabIndex="0">
            <div className="ReportInfoCard__info">
              <div className="ReportType__icon">
                <img src={iconReportTypeQuickOverview} alt="Quick overview" />
              </div>
              <div className="ReportInfoCard__content">
                <div className="ReportType__header">Quick Overview Report</div>
                <div className="ReportInfoCard__date">September 2019</div>
              </div>
            </div>
          </div>
          <div className="ReportInfoCard" role="button" tabIndex="0">
            <div className="ReportInfoCard__info">
              <div className="ReportType__icon">
                <img src={iconReportTypeEngagement} alt="Engagement type" />
              </div>
              <div className="ReportInfoCard__content">
                <div className="ReportType__header">Engagement Report</div>
                <div className="ReportInfoCard__date">September 2019</div>
              </div>
            </div>
          </div>
          <div className="ReportInfoCard" role="button" tabIndex="0">
            <div className="ReportInfoCard__info">
              <div className="ReportType__icon">
                <img src={iconReportTypeContent} alt="Content type" />
              </div>
              <div className="ReportInfoCard__content">
                <div className="ReportType__header">Content Report</div>
                <div className="ReportInfoCard__date">September 2019</div>
              </div>
            </div>
          </div>
          <div className="ReportInfoCard" role="button" tabIndex="0">
            <div className="ReportInfoCard__info">
              <div className="ReportType__icon">
                <img src={iconReportTypeFollowers} alt="Followers type" />
              </div>
              <div className="ReportInfoCard__content">
                <div className="ReportType__header">Followers Report</div>
                <div className="ReportInfoCard__date">September 2019</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="ReportsView">
        <h1 className="ReportView__header">Reports</h1>
        <h2 className="ReportView__subHeader">Latest Reports</h2>
        <div className="ReportView__reportCardWrapper">
          <ReportCard
            className="ReportCard--facebook"
            imageURL={iconFacebook}
            reportsCount={3}
            title="Facebook reports"
            handleClick={handleReportClick}
          />
          <ReportCard
            className="ReportCard--instagram"
            imageURL={iconInstagram}
            reportsCount={1}
            title="Instagram reports"
          />
          <ReportCard
            className="ReportCard--twitter"
            imageURL={iconTwitter}
            reportsCount={2}
            title="Twitter reports"
          />
        </div>
        <h2 className="ReportView__subHeader">Past reports</h2>
        <div className="ReportView__tabs">
          <div className="ReportView__tabsBackground" />
          <div className="ReportView__tab ReportView__tab--active">
            Monthly Reports
          </div>
        </div>
        <div className="ReportView__reportFilter">
          <div className="ReportView__reportFilterWrapper ReportView--selectMonthly">

            <Select
              options={Monthlyoptions}
              defaultValue={Monthlyoptions[0]}
            />
          </div>
          <div className="ReportView__reportFilterWrapper ReportView--selectYearly">
            <Select
              options={Yearoptions}
              defaultValue={Yearoptions[0]}
          />
          </div>
        </div>
        <table className="ReportView__reportsTable">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Channel</th>
              <th>Date</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Performance Report</td>
              <td>Facebook</td>
              <td>May 2019</td>
              <td>
                <button
                  className="ReportView__reportGenerateButton"
                  type="button"
                >
                  <img src={downloadIcon} alt="Download" />
                  <span>PDF</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>Performance Report</td>
              <td>Facebook</td>
              <td>May 2019</td>
              <td>
                <button
                  className="ReportView__reportGenerateButton"
                  type="button"
                >
                  <img src={downloadIcon} alt="Download" />
                  <span>PDF</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default ReportsView;
