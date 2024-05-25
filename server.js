const snarkjs = require('snarkjs');
const fs = require('fs');
const input = { in: 10 };

(async () => {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        input,
        "build/poseidon_hasher_js/poseidon_hasher.wasm",
        "circuit_0000.zkey"
    );
    console.log("Public signals:", publicSignals);
    console.log("Proof:", proof);

    fs.writeFileSync("proof.json", JSON.stringify(proof));
    fs.writeFileSync("public.json", JSON.stringify(publicSignals));
})();
