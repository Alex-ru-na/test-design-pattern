//external
class CryptocurrencyAPI{

    getValue = function(coin){
        // console.log("calling ");
        switch(coin){
            case "BTC":
                return "$12.000"
            case "ETH":
                return "$1000"
            case "LTC":
                return "$50"
        }
    }
}

//const api = new CryptocurrencyAPI();

// console.log(api.getValue("BTC"))
// console.log(api.getValue("ETH"))
// console.log(api.getValue("LTC"))


class CryptocurrencyProxy{

    api = new CryptocurrencyAPI();
    cache = {};

    getValue = function(coin){
        if(this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin];
    }
}

const proxy =  new CryptocurrencyProxy();

console.log(proxy.getValue("BTC"));
console.log(proxy.getValue("ETH"));
console.log(proxy.getValue("LTC"));


