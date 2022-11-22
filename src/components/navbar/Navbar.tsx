import * as React from "react";
import {AppBar, AppBarSection, AppBarSpacer} from "@progress/kendo-react-layout";
import {Link} from "react-router-dom";

const Navbar = () => {
   return (
       <React.Fragment>
           <AppBar
            positionMode="fixed"
            themeColor="light"
            style={{
                padding: '0px 16px',
            }}
           >

           <AppBarSection>
               <Link style={{ color: 'black', textDecoration: 'none' }} rel="noopener noreferrer" to="/">
                   Testing
               </Link>
           </AppBarSection>

           <AppBarSpacer />

           </AppBar>
       </React.Fragment>
   )
}

export default Navbar;