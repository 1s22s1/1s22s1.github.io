import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>◯△▢</h1>

            <ul>
                <li><Link to="/self_introduction">自己紹介</Link></li>
                <li><Link to="/qualification">保有資格</Link></li>
                <li><Link to="/oss">OSS活動</Link></li>
                <li><Link to="/lucky_uuid">今日のラッキーUUID</Link></li>
            </ul>
        </>
    )
}

export default Home;
