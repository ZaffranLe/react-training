import { useState } from "react";
import { Link } from "react-router-dom";

const UseStatePage = () => {
    const [state1, setState1] = useState(0);
    let [state2, setState2] = useState(0);
    const [state3, setState3] = useState({
        value: 0,
    });
    let nonState = 0;
    console.log("Component rerendered")
    return (
        <>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ flexGrow: 1 }}>
                    <div>State controlled</div>
                    {state1}{" "}
                    <button
                        style={{ height: 100, width: 100, fontSize: 60 }}
                        onClick={() => setState1((prev) => prev + 1)}
                    >
                        +
                    </button>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <div>State noncontrolled</div>
                    {state2}{" "}
                    <button
                        style={{ height: 100, width: 100, fontSize: 60 }}
                        onClick={() => (state2 = 5)}
                    >
                        +
                    </button>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <div>Non state</div>
                    {nonState}{" "}
                    <button
                        style={{ height: 100, width: 100, fontSize: 60 }}
                        onClick={() => (nonState += 1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ flexGrow: 1 }}>
                    <div>State with new object</div>
                    {state3.value}{" "}
                    <button
                        style={{ height: 100, width: 100, fontSize: 60 }}
                        onClick={() => {
                            state3.value++;
                            setState3({ ...state3 });
                        }}
                    >
                        +
                    </button>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <div>State with same object</div>
                    {state3.value}{" "}
                    <button
                        style={{ height: 100, width: 100, fontSize: 60 }}
                        onClick={() => {
                            state3.value++;
                            setState3(state3);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
            <div>
                <Link to="/">To home</Link>
            </div>
        </>
    );
};

export default UseStatePage;
