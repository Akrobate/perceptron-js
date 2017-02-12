'use strict';


module.exports = class PerceptronJs {

//   ____  _   _ ____  _     ___ ____
//  |  _ \| | | | __ )| |   |_ _/ ___|
//  | |_) | | | |  _ \| |    | | |
//  |  __/| |_| | |_) | |___ | | |___
//  |_|    \___/|____/|_____|___\____|

    constructor() {
        this.data = []
        this.targets = []
    }

    fit(data, targets) {
        this.data = data
        this.targets = targets
    }

    predict() {

    }

//   ____  ____  _____     ___  _____ _____
//  |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//  | |_) | |_) || | \ \ / / _ \ | | |  _|
//  |  __/|  _ < | |  \ V / ___ \| | | |___
//  |_|   |_| \_\___|  \_/_/   \_\_| |_____|

    /**
     * Weights init randomly
     */
    init() {

    }


}
