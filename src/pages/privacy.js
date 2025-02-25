import React from "react"

import { SimpleH1, SimpleH2, P, Em } from "components/elements"
import Layout from "components/Layout"
import Container from "components/container"
import { SimpleNavbar } from "components/Navbar"
import { withTheme } from "emotion-theming"

const Terms = ({ theme }) => (
  <Layout>
    <SimpleNavbar />
    <Container>
      <SimpleH1 color={theme.colors.primary}>Privacy Policy</SimpleH1>
      <Em color={theme.colors.secondary}>Last update: April 30, 2019</Em>{" "}
      <P>
        Sol Journal supports the following browsers: Chrome (latest), Safari
        (latest), Firefox (50+)
      </P>
      <SimpleH2 color={theme.colors.secondary}>Rights</SimpleH2>
      <P>
        You don't have to provide your real name when you register to an
        account, but you need to use a valid/verifiable email address.
        <br />
        <br />
        You have the right to export your data at any time, in JSON format.
        <br />
        <br />
        Your data will not be intentionally shown to other users or shared with
        third parties.
        <br />
        <br />
        Your personal data will not be shared with anyone without your consent.
        <br />
        <br />
        Data saved on the hosted version of Sol Journal is encrypted as it is
        transmitted and stored. However, data is not salted or hashed when it is
        stored on Google servers so database administrators (me) can view the
        data as plaintext. I won't view or use the data of other users for any
        reason but if you would like to have more ownership of your data you can
        setup the code on your own.
        <br />
        <br />
        If the site ceases operation, you will receive an opportunity to export
        all your data before the site dies.
        <br />
        <br />
        Any new features that affect privacy will be strictly opt-in.
      </P>
      <SimpleH2 color={theme.colors.secondary}>Responsibilites</SimpleH2>
      <P>
        You will not use the site to store illegal information or data under
        United States law (or any law).
        <br />
        <br />
        You have to be at least 18+ to create an account and use the site.
        <br />
        <br />
        You must not abuse the site by knowingly posting malicious code that
        could harm you or the other users.
        <br />
        <br />
        You may not make automated requests to the site.
        <br />
        <br />
        You may not abuse the registration system.
        <br />
        <br />
        You are responsible for keeping your account secure.
        <br />
        <br />I reserve the right to close accounts that abuse the system
        (millions of entries or overloading services with requests) or use it in
        an unreasonable manner.
      </P>
      <SimpleH2 color={theme.colors.secondary}>Other</SimpleH2>
      <P>
        Other important legal stuff Though I want to provide a great service,
        there are certain things about the service I cannot promise. For
        example, the services and software are provided “as-is”, at your own
        risk, without express or implied warranty or condition of any kind. I
        also disclaim any warranties of merchantability, fitness for a
        particular purpose or non-infringement. Sol Journal will have no
        responsibility for any harm to your computer system, loss or corruption
        of data, or other harm that results from your access to or use of the
        Services or Software.
        <br />
        <br />
        These Terms can change at any time, but I'll try to be reasonable. This
        is a service I've always and hope to be able to run it for a long time.
      </P>
    </Container>
  </Layout>
)

export default withTheme(Terms)
