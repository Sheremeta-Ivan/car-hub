import React from 'react';
import { Link } from 'react-router-dom';
import { FaAnglesRight } from 'react-icons/fa6';
import Image from 'assets/hero.png';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../redux/cars-slice';
import css from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <section className={css.home}>
      <div className={css.homeDiv}>
        <div>
          <h1 className={css.title}>
            Find, book, rent a car -- quickly and easily!
          </h1>
          <p className={css.subtitle}>
            Streamline your car experience with our effortless booking process.
          </p>
          <Link
            to="/catalog"
            className={css.button}
            onClick={() => dispatch(setActivePage('catalog'))}
          >
            Book a car
            <FaAnglesRight className="mx-2 " />
          </Link>
        </div>

        <img src={Image} alt="hero-car-img" className={css.homeImg} />
      </div>
    </section>
  );
};

export default Home;
