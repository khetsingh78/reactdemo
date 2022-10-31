function Footer(props) {
    return (
        <div className="fluid-container footer py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png" alt="" srcset="" width="40px" height="40px" />
                        <p>lorem jhsdghsd sdhgkshdg oisdhgls oshdgs kisdg ihsdg khsdg osglhgsdg olhsdg</p>
                    </div>
                    <div className="col-md-4">
                        <h1 className="fs-5 fw-bold text-black">Links</h1>

                        <ul className='m-0'>
                            <a href='home'><li>{props.manuItems[0]}</li></a>
                            <a href='about'> <li>{props.manuItems[1]}</li></a>
                            <a href='services'> <li>{props.manuItems[2]}</li></a>
                            <a href='blog'>  <li>{props.manuItems[3]}</li></a>
                            <a href='contact'> <li>{props.manuItems[4]}</li></a>
                        </ul>

                    </div>
                    <div className="col-md-4">
                        <h1 className="fs-5 fw-bold text-black">Gategories</h1>
                        <ul className='m-0'>
                            <a href='home'><li>Shirt</li></a>
                            <a href='about'> <li>T-Shirt</li></a>
                            <a href='services'> <li>Shoes</li></a>
                            <a href='blog'>  <li>Jacket</li></a>
                            <a href='contact'> <li>Watch</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;