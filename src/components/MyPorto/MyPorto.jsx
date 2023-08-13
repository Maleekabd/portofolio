import React from "react";
import Cryptography from "./Projects/Cryptography";
import QuantumComputing from "./Projects/QuantumComputing";
import Network from "./Projects/Network";
import Frontend from "./Projects/Frontend";

const MyPorto = () => {

    return (
        <>
            <Cryptography />
            <Frontend />
            <Network />
            <QuantumComputing />
        </>
    )
}

export default MyPorto;