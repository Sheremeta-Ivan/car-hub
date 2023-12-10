import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import css from './Layout.module.css';
import { setActivePage } from 'redux/cars-slice';
import LogoSvg from 'components/LogoSvg/LogoSvg';

const Layout = () => {
  const activePage = useSelector(state => state.cars.activePage);
  const dispatch = useDispatch();
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" onClick={() => dispatch(setActivePage('home'))}>
            <LogoSvg />
          </Link>
          <div className={css.links}>
            <NavLink
              to="/"
              className={css.link}
              onClick={() => dispatch(setActivePage('home'))}
              style={{
                textDecoration: activePage === 'home' ? 'underline' : 'none',
              }}
            >
              <h2>Home</h2>
            </NavLink>

            <NavLink
              to="/catalog"
              className={css.link}
              onClick={() => dispatch(setActivePage('catalog'))}
              style={{
                textDecoration: activePage === 'catalog' ? 'underline' : 'none',
              }}
            >
              <h2>Catalog</h2>
            </NavLink>

            <NavLink
              to="/favorites"
              className={css.link}
              onClick={() => dispatch(setActivePage('favorites'))}
              style={{
                textDecoration:
                  activePage === 'favorites' ? 'underline' : 'none',
              }}
            >
              <h2>Favorites</h2>
            </NavLink>
          </div>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
