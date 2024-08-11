import dynamic from "next/dynamic";
const BackgroundImage = dynamic(() => import('../../../components/layout/BackgroundImage'), {ssr: false});



export default function Terms() {

    const term = `
Rhythm Archive (리듬아카이브) 는 '넥슨게임즈'에서 개발한 모바일 게임 '블루아카이브'의 IP를 활용한 2차창작 팬게임이며 '넥슨게임즈'의 공식적인 창작물이 아닙니다.

본 게임은 수익을 창출하지 않으며 모든 권리는 넥슨게임즈, MX studio에게 있습니다. 
또한 Rhythm Archive를 유료로 재판매하거나 공개, 배포, 사용허락에 대한 대가를 받을 수 없습니다.

본 게임에 사용된 음원은 블루아카이브 공식 유튜브 채널 www.youtube.com/@bluearchive_kr 에 게재되어 있습니다.

리듬아카이브는 테스트 단계에 있으며, 개발자 메일을 통해 개선사항과 버그리폿 등의 피드백을 받고 있습니다. (hgchang1@naver.com)
`;

    const privacy = `
Unpaved Pub(이하 UPP)은 고객님의 정보를 중요하게 생각하며, 아래와 같은 개인정보취급방침을 준수합니다.
UPP는 "정보통신망 이용촉진 및 정보보호 등에 관한 법률"을 준수하며, 고객님의 정보를 어떤 방식으로 사용하는지와, 보호에 관련한 사항을 알려드립니다.

1. 수집하는 개인정보의 항목 및 수집방법
- close alpha, beta 단계에서는 어떠한 데이터도 수집하지 않습니다.

2. 개인정보의 이용목적
- 플레이어간 점수표 비교.
    - 노출되는 개인정보 : 닉네임, UID
    - 수집목적 : 플레이어간 점수표 비교를 위함
`;

    return (
        <div className="main">
            <BackgroundImage src={'/wallpaper.png'} darken={0.6}
                style={{
                    backgroundAttachment : 'fixed',
                    position:'fixed',
                    zIndex:-3,
                }}
            />
            <div
                style={{
                    color : 'white',
                    padding : 100,
                    paddingLeft : '10%',
                    paddingRight : '10%',

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
                
                <br/>
                <br/>
                <hr></hr>
                <br/>

                <div style={{fontSize : 40}}>
                    Privacy
                </div>
                <div
                    style={{
                        lineHeight : 2,
                    }}
                >
                    {privacy}
                </div>
            </div>
        </div>
    )
}