import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}  
            
            <div className='wrapper'>
                <span className='text-3xl font-bold logoText'>Abu Saadat Md. Sayem</span>
              <div className='social'>
                <a href="link"><img className='w-10' src="/facebook.png" alt="facebook" /> </a>
                <a href="link"><img className='w-10' src="/github.png" alt="github"/> </a>
              </div>
            </div>
        </div>
    );
};

export default Navbar;