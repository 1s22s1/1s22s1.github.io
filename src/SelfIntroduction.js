import { Container } from "@mui/material";
import QAndA from "./QAndA";

const SelfIntroduction = () => {
    const qaArr = [
        { question: "お名前は？", answer: "原子軌道です。物理を理解したかったのですが、適性がなく悔しいのでこの名前にしました。" },
        { question: "誕生日は？", answer: "12月20日です。誕生石はタンザナイト、星座は射手座です。また、誕生花はカトレアです。" },
        { question: "性別は？", answer: "男です。" },
        { question: "好きな食べ物は？", answer: "味噌バターコーンラーメンが好きです。なかなか、売っているお店がなくて悲しいです。" },
        { question: "苦手な食べ物は？", answer: "🦑や🐙、🐚などが苦手です。" },
        { question: "どんな人がタイプ？", answer: "経験的に学生時代に美術部だった人と相性が良いです。" },
        { question: "将来の夢は？", answer: "図書館界隈で有名な石川県立図書館に行ってみたいです。" },
        { question: "好きな動物は？", answer: "昔ホーランド・ロップを飼っていたので、うさぎが好きです。" },
        { question: "趣味は何？", answer: "パズルが好きなので、詰将棋をやっています。" },
        { question: "好きな漫画は？", answer: "ワールドトリガー、終の退魔師、将国のアルタイル等々が好きです。" },
        { question: "長所は？", answer: "自分が決めたことを達成するまでやることです。" },
        { question: "短所は？", answer: "人見知りなことです。" },
        { question: "好きな色は？", answer: "リッチブラックが好きです。黒色に対して、更に要素を追加しているところが好みです。" },
        { question: "利き手は？", answer: "右利きです。" },
        { question: "血液型は？", answer: "A型です。" },
        { question: "白と黒、どちらの方が好き？", answer: "黒です。" },
        { question: "好きな天気は？", answer: "過ごしやすいので、曇りです。" },
        { question: "好きな有名人は？", answer: "満島ひかりさんです。カルテットというドラマを観てファンになりました。" },
        { question: "言われて嬉しい言葉は？", answer: "褒められるとどの言葉でも嬉しいです。" },
        { question: "小説だとどんなジャンルが好きですか？", answer: "現代奇譚が好きです。有名どころだと、虚構推理でしょうか。" },
        { question: "最後に一言", answer: "よろしくお願いします〜。" },
    ];

    return (
        <Container>
            <h1>自己紹介</h1>

            {
                qaArr.map((e, index) =>
                    <QAndA key={index} question={e.question} answer={e.answer} />
                )
            }
        </Container>
    )
}

export default SelfIntroduction;
