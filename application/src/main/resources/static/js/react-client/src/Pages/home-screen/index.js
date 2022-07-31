import Event from '../../Components/event';
import Login from '../../Components/login';
import News from '../../Components/news-article';
import Post from '../../Components/post';
import style from './style.module.scss';

const HomeScreen=()=>{
    return(
       
        <div className={style.HomeScreen}>
            <Login/>
            <h2>This is the HomeScreen</h2>
            <News/>
            <Event/>
            <Post/>
        </div>
    )
}
export default HomeScreen