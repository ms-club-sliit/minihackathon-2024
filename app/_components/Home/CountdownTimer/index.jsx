// import Timer from './timer'
import dynamic from 'next/dynamic';
const Timer = dynamic(() => import("./timer"), {
    ssr: false,
});
export default function CountdownTimer() {
    return (
        <>
            <div className="bg-sponsors-bg bg-cover bg-center overflow-hidden ">
                <div className="row text-center">
                    <h2 className="text-2xl md:text-4xl text-neutral-500">Awareness Session</h2>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Coming Soon!</h2>
                </div>
                <div className="row mt-3 w-full h-auto"><Timer /></div>
            </div>
        </>
    );
}

