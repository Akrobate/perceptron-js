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

    /**
	 *	Train method
	 *
	 */

	train(nbtrains) {
		for (k = 0; k < nbtrains; k++) {
			for (i = 0; i < this.nbitems; i++) {
				for(j = 0; j < count(this.learnData); j++) {
					this.learn(j, i);
				}
			}
		}
	}


	/**
	 *	Learning method
	 *
	 */

	learn(numG, numW) {
		result = this.calcul(numG, numW);

		for (i = 0; i < this.size; i++) {
			this.weights[numW][i] = this.calculWeights(
					this.weights[numW][i],
					this.learnData[numG]['result'] == this.keys_results[numW],
					result,
					this.learnData[numG]['data'][i]
			);
		}
	}

	/**
	 *	Method for calculate weights
	 */
	calculWeights(valeur, valeur_desiree, valeur_obtenue, valeur_entree) {
		let result = (valeur + (valeur_desiree - valeur_obtenue) * valeur_entree * 10);
		return result;
	}

    /**
     * Calculate from a given motif
     */
    calculMotif(motif, numW) {
		let total = this.calculTotalMotif(motif, numW);
		return (total > 0)?1:0;
	}


    /**
     *  Calculate the sum of the data
     */
    calculTotalMotif(motif, numW) {
        let total = 0;
        for (i=0; i < this.size; i++) {
            if (motif[i] == 1) {
                total += this.weights[numW][i];
            }
        }
        return total;
    }

}
