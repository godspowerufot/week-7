import './layout.css';

const Footer = () => {
  return (
    <footer className='footer-gw3'>
      <div className='footer-content-gw3'>
        <div className='footer-social-gw3'>
          <a
            href='https://github.com/Goodnesmbakara'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link-gw3'
          >
            <img src='/assets/icons/github.svg' alt='Github' className='footer-icon-gw3' />
            <span>GitHub (Org)</span>
          </a>
          <a
            href='https://discord.com/users/goodnessmbakara'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link-gw3'
          >
            <img src='/assets/icons/discord.svg' alt='Discord' className='footer-icon-gw3' />
            <span>Discord: @goodnessmbakara</span>
          </a>
          <a
            href='https://twitter.com/Goodnesmbakara'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link-gw3'
          >
            <img src='/assets/icons/twitter.svg' alt='Twitter' className='footer-icon-gw3' />
            <span>Twitter</span>
          </a>
        </div>
        <div className='footer-copy-gw3'>
          <span>GoodnessOnWeb3 &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
