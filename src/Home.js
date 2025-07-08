import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>◯△▢</h1>

            <ul>
                <li><Link to="/self_introduction">自己紹介</Link></li>
                <li><a href="qualification.html">保有資格</a></li>
                <li><a href="oss.html">OSS活動</a></li>
                <li><a href="handbook.html">詰将棋ハンドブック</a></li>
            </ul>
        </div>
    )
}

export default Home;
