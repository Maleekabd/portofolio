import React from "react";
import Cryptography from "./Projects/Cryptography";
import QuantumComputing from "./Projects/QuantumComputing";
import Network from "./Projects/Network";
import Frontend from "./Projects/Frontend";

const MyPorto = () => {

    return (
        <div>
            <Cryptography />
            <Frontend />
            <Network />
            <QuantumComputing />
        </div>
    )
}

export default MyPorto;