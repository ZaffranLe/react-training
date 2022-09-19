import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UseEffectPage = () => {
    const [state1, setState1] = useState(0);

    useEffect(() => {
        console.log("Effect without array");
        return () => {
            console.log("Clean up of effect without array");
        };
    });
    useEffect(() => {
        console.log("Effect with empty array");
        return () => {
            console.log("Clean up of effect with empty array");
        };
    }, []);
    useEffect(() => {
        console.log("Effect with one dependency");
        return () => {
            console.log("Clean up of effect with one dependency");
        };
    }, [state1]);
    return (
        <>
            State: {state1}
            <button
                style={{ height: 100, width: 100, fontSize: 60 }}
                onClick={() => setState1((prev) => prev + 1)}
            >
                +
            </button>
            <div>
                <Link to="/">To home</Link>
            </div>
        </>
    );
};

export default UseEffectPage;
