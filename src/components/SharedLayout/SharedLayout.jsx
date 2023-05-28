import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header,LogoLink, Logo, LogoImg, LogoBox, Link } from './SharedLayout.styled';
import laibl from '../../images/movie.png';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
      <LogoLink to="/" end>
        <Logo>
          <LogoBox>
            <LogoImg src={laibl} alt="laibl" />
          </LogoBox>
          InfoMovie
        </Logo>
        </LogoLink>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
