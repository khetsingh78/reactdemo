
function Navbar(props) {
    return (
        <div className='fluid-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <a href='home' ><img src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png" alt="" srcset="" width="40px" height="40px" /></a>
                    </div>

                    <div className='col-md-6'>
                        <ul className='m-0'>
                            <a href='home'><li>{props.manuItems[0]}</li></a>
                            <a href='about'> <li>{props.manuItems[1]}</li></a>
                            <a href='services'> <li>{props.manuItems[2]}</li></a>
                            <a href='blog'>  <li>{props.manuItems[3]}</li></a>
                            <a href='contact'> <li>{props.manuItems[4]}</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;
