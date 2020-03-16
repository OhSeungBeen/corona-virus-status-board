import React from 'react';

import { Container } from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          {/* <Nav>
            <NavItem>
              <NavLink href="javascript:void(0)">Creative Tim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">Blog</NavLink>
            </NavItem>
          </Nav> */}
          <div className="copyright">
            © {new Date().getFullYear()} made with{' '}
            <i className="tim-icons icon-heart-2" /> by 오 승 빈 for a better
            web.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
