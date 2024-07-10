// TODO: Create a Eligibility component.

import Timer from './timer'
export default function CountdownTimer() {
    return (
        <>
            <div className="countdownTimer">
                <div className="row text-center">
                    <h2 className="text-2xl md:text-4xl text-neutral-500">Awareness Session</h2>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Coming Soon!</h2>
                </div>
                <div className="row mt-3"><Timer /></div>
            </div>
        </>
    );
}
