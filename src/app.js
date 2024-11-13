export class BerlinClock {

    oneMinuteLine(time) {

      const minutes = parseInt(time.split(":")[1]);

      if(minutes % 10 ===0 || minutes % 10 === 5)return "aucune lampe allumée";
      
      if(minutes % 10 ===1 || minutes % 10 === 6)return "1ère lampe jaune allumée";

      if(minutes % 10 ===2 || minutes % 10 === 7)return "deux lampes jaune allumée";

      if(minutes % 10 ===3 || minutes % 10 === 8)return "trois lampes jaune allumée";

      if(minutes % 10 ===4 || minutes % 10 === 9)return "quatre lampes jaune allumée";


    }

    fiveMinuteLine(time) {
        const minutes = parseInt(time.split(":")[1]);
        let result = "";

        for (let i = 1; i <= 11; i++) {
            if (i * 5 <= minutes) {
                if (i % 3 === 0) {
                    result += "lampe rouge, ";
                } else {
                    result += "lampe jaune, ";
                }
            } else {
                break;
            }
        }

        return result ? result.slice(0, -2) : "Aucune lampe allumée";
    }

    oneHourLine(time) {

        const hours = parseInt(time.split(":")[0]) % 5;

        if (hours === 0) return "Aucune lampe allumée";
        
    }

}