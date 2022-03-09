import cars from "../Data/Cars.json" assert { type: "json" };

export default class MainController{

    graphdata = {};

    readJson(){
        let data = cars;
        
        for (let i in data) {
            for (let j = 0; j < i.cars.length; j++) {
                
                if(!(data[index].cars[j].color in this.graphdata)) {

                        this.graphdata[ data[index].cars[j].color ] = 1;
                }else{
                        this.graphdata[data[index].cars[j].color] += 1;
                }

            }
        }
        return this.graphdata;
    }
}