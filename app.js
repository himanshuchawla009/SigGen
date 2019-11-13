var shell = require("shelljs");

function createMintAccountTx() {

    try {
        let { stdout, stderr, code } = shell.exec(`shopt -s expand_aliases; create`,
            { shell: '/bin/bash', silent: true, interactive: true });

        console.log(stdout, "create mint account rea")
        return stdout

    } catch (error) {
        console.log(error)
    }

}

function exchangeTx(amount, address) {

    try {
        let { stdout, stderr, code } = shell.exec(`shopt -s expand_aliases; exchange ${amount} ${address}`,
            { shell: '/bin/bash' });
        console.log(stdout)
        return stdout
    } catch (error) {

        console.log(error)
    }

}

function mintTx(amount) {

    try {
        let { stdout, stderr, code } = shell.exec(`shopt -s expand_aliases; mint ${amount}`,
            { shell: '/bin/bash' });
        console.log(stdout)
        return stdout
    } catch (error) {
        console.log(error)
    }

}

module.exports = { createMintAccountTx, exchangeTx, mintTx};  