import BackgroundImage from "../../../components/layout/BackgroundImage";


export default function Terms() {

    const term = `
Rhythm Archive (리듬아카이브) 는 '넥슨게임즈'에서 개발한 모바일 게임 '블루아카이브'의 IP를 활용한 2차창작 팬게임이며 '넥슨게임즈'의 공식적인 창작물이 아닙니다.

본 게임은 수익을 창출하지 않으며 모든 권리는 넥슨게임즈, MX studio에게 있습니다. 
또한 Rhythm Archive를 유료로 재판매하거나 공개, 배포, 사용허락에 대한 대가를 받을 수 없습니다.

본 게임에 사용된 음원은 블루아카이브 공식 유튜브 채널 www.youtube.com/@bluearchive_kr 에 게재되어 있습니다.

리듬아카이브는 테스트 단계에 있으며, 개발자 메일을 통해 개선사항과 버그리폿 등의 피드백을 받고 있습니다. (hgchang1@naver.com)
`;

    return (
        <div className="main">
            <BackgroundImage />
            <div
                style={{
                    color : 'white',
                    padding : 100,
                    paddingLeft : '20%',
                    paddingRight : '20%',

                    fontFamily : 'CoreDream',
                }}
            >
                <div style={{fontSize : 40}}>
                    Terms
                </div>
                <div
                    style={{
                        lineHeight : 2,
                    }}
                >

                    {term}
                </div>
            </div>
        </div>
    )
}