import * as React from 'react'
import styled from 'styled-components'
import { Layout, Jobs, Seo, Projects, Me, About, Contact } from '@components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`
const IndexPage = ({ location }) => {
  return (
    <>
    <Layout location={location} pageTitle="Brian Zalewski">
      <StyledMainContainer>
        <Me />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
    </>
  )
}

export const Head = () => <Seo />

export default IndexPage