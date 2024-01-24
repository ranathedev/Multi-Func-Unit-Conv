import PropTypes from 'prop-types'
import clsx from 'clsx'

import Logo from '../../assets/logo.svg'
import ContactIcon from '../../assets/contact.svg'
import HomeIcon from '../../assets/home.svg'
import AboutIcon from '../../assets/about.svg'

import stl from './Navbar.module.scss'

const Navbar = ({
  home,
  about,
  contact,
  unitConv,
  changeComp,
  customClass,
}) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.logo}>
        <Logo />
      </div>
      <ul data-cy="navbar" className={clsx(stl.mainList, stl.collapse)}>
        <li
          onClick={() => {
            changeComp(0)
          }}
          className={stl[`${home}`]}
        >
          Home
        </li>
        <li
          onClick={() => {
            changeComp(1)
          }}
          className={stl[`${unitConv}`]}
        >
          Unit Converter
        </li>
        <li
          onClick={() => {
            changeComp(2)
          }}
          className={stl[`${about}`]}
        >
          About
        </li>
        <li
          onClick={() => {
            changeComp(3)
          }}
          className={stl[`${contact}`]}
        >
          Contact
        </li>
      </ul>
      <div className={stl.exp_col_Btn}>
        <div className={stl.left}>
          <HomeIcon
            onClick={() => {
              changeComp(0)
            }}
            className={stl.icon}
          />
        </div>
        <div className={stl.middle}>
          <h2
            onClick={() => {
              changeComp(1)
            }}
            className={stl.icon}
          >
            Unit Converter
          </h2>
        </div>
        <div className={stl.right}>
          <AboutIcon
            onClick={() => {
              changeComp(2)
            }}
            className={stl.icon}
          />
          <ContactIcon
            onClick={() => {
              changeComp(3)
            }}
            className={stl.icon}
          />
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  home: '',
  about: '',
  contact: '',
  unitConv: '',
  changeComp: () => {
    console.log('Change Component')
  },
}

Navbar.propTypes = {
  home: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  unitConv: PropTypes.string,
  changeComp: PropTypes.func,
}

export default Navbar
