import chef_claude_icon from '../images/chef-claude-icon.png';
export default function Header() {
    return (
        <header className="nav-bar">
            {/* <div className=""> */}


                <div className="frame-38">
                        <img src={chef_claude_icon} className="chef-claude-icon" alt='chef-claude-icon'/>
                        <div className="chef-claude">Chef Claude</div>
                </div>
            {/* </div> */}

       
                
           
        </header>
    )
}