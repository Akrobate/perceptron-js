'use strict'

const PerceptronJs = require('../src/PerceptronJs')

describe('PerceptronJS Class Test', () => {

    it('Perceptron check', (done) => {
        done()
        // throw new Error('dismatch')
    })


    it('Method calculWeights', (done) => {

        let p = new PerceptronJs()
        let valeur = 10
        let valeur_desiree = 5
        let valeur_obtenue = 4
        let valeur_entree = 1

        let wanted = (valeur + (valeur_desiree - valeur_obtenue) * valeur_entree * 10)
        let obtained = p.calculWeights(valeur, valeur_desiree, valeur_obtenue, valeur_entree)
        if (wanted == obtained) {
            done()
        } else {
            throw new Error('dismatch wanted ' + wanted + ' obtained ' + obtained)
        }
    })

})
