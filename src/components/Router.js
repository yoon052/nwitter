// import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({isLoggedIn}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); //eslint-disable-line no-unused-vars
    return (
        <Router>
            <Routes>    //v6 버전으로 인해 Switch가 Routes로 변경됨 //component가 element로 바뀜
                {isLoggedIn ? (
                    <Route path="/" element={<Home />}>    //exact 안쓴다                        
                    </Route>
                ) : (
                    <Route path="/" element={<Auth />}>    //exact 안쓴다                        
                    </Route>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;