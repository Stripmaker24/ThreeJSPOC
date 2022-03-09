import cars from "../Data/Cars.json" assert { type: "json" };

export default class MainController{

    graphdata = {};
    counter = 0;

    constructor(){
        this.readJson();
    }

    readJson(){
        let data = cars;
        
        for (let index = 0; index < data.length; index++) {
            for (let j = 0; j < data[index].cars.length; j++) {
                
                if(!(data[index].cars[j].color in this.graphdata)) {

                        this.graphdata[ data[index].cars[j].color ] = 1;

                }else{
                    
                        this.graphdata[data[index].cars[j].color] += 1;
                      
                }

            }
        }
        console.log(this.graphdata)
    }



}