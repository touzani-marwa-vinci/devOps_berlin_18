export class BerlinClock {

    oneMinuteLine(time) {

      const minutes = parseInt(time.split(":")[1]);

      if(this.noLamp(minutes))return "aucune lampe allumée";
      
      if(this.oneLamp(minutes))return "1ère lampe jaune allumée";

      if(this.twoLamp(minutes))return "deux lampes jaune allumée";

      if(minutes % 10 ===3 || minutes % 10 === 8)return "trois lampes jaune allumée";

      if(minutes % 10 ===4 || minutes % 10 === 9)return "quatre lampes jaune allumée";


    }

    twoLamp(minutes) {
        return minutes % 10 === 2 || minutes % 10 === 7;
    }

    oneLamp(minutes) {
        return minutes % 10 === 1 || minutes % 10 === 6;
    }

    noLamp(minutes) {
        return minutes % 10 === 0 || minutes % 10 === 5;
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
        if (hours === 1) return "une lampe rouge allumée";
        if (hours === 2) return "deux lampes rouge allumée";
        if (hours === 3) return "trois lampes rouge allumée";
        if (hours === 4) return "quatre lampes rouge allumée";

    }
    fiveHourLine(time) {

        const hours = parseInt(time.split(":")[0]);

        if (hours < 5) return "Aucune lampe allumée";

        if (hours >= 5 && hours < 10) return "une lampe rouge allumée";

        if (hours >= 10 && hours < 15) return "deux lampes rouge allumée";
        
        if(hours>=15 && hours<20)return "trois lampes rouge allumée";

        if(hours>=20 && hours<25)return "quatre lampes rouge allumée";


    }
    secondeLine(time){

        const seconds=parseInt(time.split(":")[2]);
        if(seconds %2===0)return "lampe jaune allumée";
        return "lampe éteinte";
    }
    berlinClock(time){
        const fiveHour=this.fiveHourLine(time);
        const oneHour=this.oneHourLine(time);
        const fiveMinute=this.fiveMinuteLine(time);
        const oneMinute=this.oneMinuteLine(time);
        const seconds=this.secondeLine(time);

        return `${fiveHour}\n${oneHour}\n${fiveMinute}\n${oneMinute}\n${seconds}`;

    }
}