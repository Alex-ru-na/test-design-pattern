class GolderRing {
    calculate(params) {
        // logic for calulate
        return 200
    }
}

class SilverRing {
    calculate(params) {
        // logic for calulate
        return 50
    }
}

class Ring {
    company;
    setStrategy = (typeRing)=> {
        this.typeRing = typeRing;
    }

    calculate = params => {
        return this.typeRing.calculate(params)
    }
}

const ring =  new Ring();

const golden1 = new GolderRing();
const silver1 = new SilverRing();

ring.setStrategy(golden1)
const goldeValue = ring.calculate({carats: 18})

ring.setStrategy(silver1)
const silverValue = ring.calculate()

console.log({ goldeValue , silverValue});

