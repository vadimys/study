import ReactDOM from 'react-dom';
import './index.css';
import LifecycleApp from "./components/LifeCycleApp";
import RunOnChange from "./components/RunOnChange";
import Fetch from "./components/RedditFetch";

ReactDOM.render(
    <Fetch/>,
    /*<RunOnChange/>,*/
    /*<LifecycleApp/>,*/
    document.getElementById('root')
);
