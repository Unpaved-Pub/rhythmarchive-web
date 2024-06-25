import Image from "next/image";
import Link from "../../components/Common/link";


function DownloadButton() {
    return (
        <button
            style={{
                borderRadius : 100,
                padding : 10,
            }}
        >
            download(google)
        </button>
    )
}

export default function Home() {
    return (
        <main className={'main'}
            style={{
                // backgroundImage : `url('/wallpaper.png')`
            }}
        >
            <Image src="/wallpaper.png"  width={2560} height={900}
                style={{
                    position : 'absolute',
                    zIndex : 0,
                }}
            />
            <div style={{zIndex : 1}}>
                hello everyone.

                <DownloadButton />
            </div>
            aaa
        </main>
    );
}
