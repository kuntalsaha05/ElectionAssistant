import React from 'react';
import PropTypes from 'prop-types';

const steps = [
  {
    id: 1,
    title: 'Voter Registration',
    date: 'Months before Election',
    description: 'Citizens must register to vote according to their state laws. Deadlines vary by location.'
  },
  {
    id: 2,
    title: 'Primary Elections & Caucuses',
    date: 'Spring/Summer',
    description: 'Political parties select their official candidates through voting at the state level.'
  },
  {
    id: 3,
    title: 'National Conventions',
    date: 'Late Summer',
    description: 'Parties officially nominate their candidates for President and Vice President.'
  },
  {
    id: 4,
    title: 'General Election Campaign',
    date: 'Fall',
    description: 'Candidates campaign nationally, debate issues, and appeal directly to voters.'
  },
  {
    id: 5,
    title: 'Election Day',
    date: 'First Tuesday in November',
    description: 'Registered voters cast their ballots. Many also vote early or via mail-in ballots.'
  },
  {
    id: 6,
    title: 'Electoral College Vote',
    date: 'Mid-December',
    description: 'Electors cast their official votes for President and Vice President based on state results.'
  },
  {
    id: 7,
    title: 'Inauguration',
    date: 'January 20th',
    description: 'The newly elected or re-elected President is sworn into office.'
  }
];

/**
 * Timeline component displays a chronological list of election events.
 * @returns {JSX.Element} The Timeline component.
 */
const Timeline = React.memo(() => {
  return (
    <div className="timeline-container">
      <h2>Election Process Timeline</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
        A general overview of how the U.S. Presidential Election process unfolds.
      </p>
      
      <ul className="timeline">
        {steps.map((step) => (
          <li key={step.id} className="timeline-step">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">{step.date}</div>
              <div className="timeline-title">{step.title}</div>
              <div className="timeline-desc">{step.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
