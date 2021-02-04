import { Container } from 'reactstrap';
import Navigation from './Navigation';


const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;

