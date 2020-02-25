const element = (
    <div>
        <table style={{position: 'absolute', marginLeft: '10%', marginTop: '2%'}}>
            <tbody><tr>
                <td><a href="index.html">Home</a></td>
                <td><a href="about.html">About us</a></td>
                <td><a href="portfolio.html">Portfolio</a></td>
            </tr>
            <tr>
                <td><a href="resume.html">Resume</a></td>
                <td><a href="contact.html">Contact</a></td>
            </tr>
            </tbody></table>
        <h3 style={{float: 'right', marginRight: '25%'}}>Follow Me</h3>
        <div style={{position: 'absolute', marginLeft: '68%', marginTop: '2%', width: '30%'}}>
            <div className="social github">
                <a href="#" target="_blank"><i className="fa fa-github fa-2x" /></a>
            </div>
            <div className="social instagram">
                <a href="https://www.instagram.com/maximqa.a/" target="_blank"><i className="fa fa-instagram fa-2x" /></a>
            </div>
            <div className="social vk">
                <a href="https://vk.com/id164297962" target="_blank"><i className="fa fa-vk fa-2x" /></a>
            </div>
            <div className="social telegram">
                <a href="#" target="_blank"><i className="fa fa-paper-plane fa-2x" /></a>
            </div>
        </div>
        <table style={{fontSize: '30px', position: 'absolute', marginLeft: '40%'}}><tbody><tr>
            <td><i className="fa fa-envelope" aria-hidden="true" /></td>
            <td><b style={{fontSize: '18px'}}>vip.maksmax@gmail.com</b></td>
        </tr>
        <tr>
            <td><i className="fa fa-phone-square" aria-hidden="true" /></td>
            <td><b style={{fontSize: '18px'}}>+79511933733</b></td>
        </tr>
        </tbody></table>
    </div>
);
ReactDOM.render(element, document.getElementById('footer'));
