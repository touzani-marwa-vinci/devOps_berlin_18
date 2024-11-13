import { BerlinClock } from "../src/app.js";

describe("minute line", function () {
    const clock = new BerlinClock();


    it("1MinuteLine should return off when given 0:00", function () {
        const time = "0:00";

        const result = clock.oneMinuteLine(time);
        
        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("aucune lampe allumée");
    });

    it("1MinuteLine should return 1 lampe when given 0:01 ", function () {
        const time = "0:01";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("1ère lampe jaune allumée");
    });

    it("1MinuteLine should return 2 lampes when given 0:02 ", function () {
        const time = "0:02";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("deux lampes jaune allumée");
    });

    it("1MinuteLine should return 3 lampes when given 0:03 ", function () {
        const time = "0:03";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("trois lampes jaune allumée");
    });

    it("1MinuteLine should return 4 lampes when given 0:04 ", function () {
        const time = "0:04";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");

        expect(result).toBe("quatre lampes jaune allumée");
    });
    it("1MinuteLine should return off when given 0:15 ", function () {
        const time = "0:15";

        const result = clock.oneMinuteLine(time);

        console.log("Test oneMinuteBlock:", time,":",result);

        console.log("");
        
        expect(result).toBe("aucune lampe allumée");
    });
});
