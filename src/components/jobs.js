import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledJobsSection = styled.section`
  max-width: 700px;
  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledJobList = styled.div`
  max-width: 700px;
  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const StyledJob = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--blue);
    border-bottom-color: var(--navy);
    border-right-color: var(--navy);
    border-radius: var(--border-radius);

    h3 {
      margin-bottom: 3px
    }
    h5 {
      margin: 0;
    }
    .jobRange {
        font-size: var(--fz-sm);
    }
`;

const StyledMilestones = styled.ul`
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  list-style-type: none;
  position: relative;

  li {
    padding-bottom: 10px;
    position: relative;

    &:before {
      content: "\uD83E\uDC92";
      /* content: "▹"; */
      position: absolute;
      left: -10px;
      top: -2px;
      color: var(--white);
      font-size: 1.2em;
    }
  }
`;

const Jobs = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
        allMongodbBrianzalewskiJobs(sort: {startDate: DESC}) {
            nodes {
                url
                title
                subtitle
                startDate
                milestones
                location
                jobtype
                endDate
                company
                mongodb_id
            }
        }
        }
    `)

    const jobs = data.allMongodbBrianzalewskiJobs.nodes

    return (
      <StyledJobsSection id="jobs">
        <h2 className="section-heading">Work History</h2>
        <StyledJobList>
            {jobs.map((job) => {
                const sdate = new Intl.DateTimeFormat("en-US", {month: "long", year: "numeric"}).format(new Date(job.startDate));
                const edate = job.endDate ? new Intl.DateTimeFormat("en-US", {month: "long", year: "numeric"}).format(new Date(job.endDate)) : "Current"
                return (
                    <StyledJob key={job.mongodb_id}>
                        <h3>{job.title}{job.subtitle && `, ${job.subtitle}`}</h3>
                        <h5><a href={job.url} className="inline-link">{job.company}</a> ({job.location})</h5>
                        <p className="jobRange">{sdate} - {edate}</p>
                        <StyledMilestones>
                          {job.milestones.map((ms, index) =>
                              <li key={index}>{ms}</li>
                          )}
                        </StyledMilestones>
                    </StyledJob>
                )
            })}
        </StyledJobList>
      </StyledJobsSection>
    )
}

export default Jobs