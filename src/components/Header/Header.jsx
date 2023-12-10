import React from 'react';
import css from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import carsSelectors from 'redux/cars-selectors';
import { setActivePage } from 'redux/cars-slice';
import LogoSvg from 'components/LogoSvg/LogoSvg';
const Header = () => {
  const activePage = useSelector(carsSelectors.getActivePage);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.header}>
        <Link to="/" className={css.logo}>
          <LogoSvg />
        </Link>

        <div className={css.navlinks}>
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
              textDecoration: activePage === 'favorites' ? 'underline' : 'none',
            }}
          >
            <h2>Favorites</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
