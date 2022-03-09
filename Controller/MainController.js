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

                        this.graphdata[ data[index].cars[j].color ] = 0;

                }else{
                    Object.keys(this.graphdata).forEach(key => {
                        this.graphdata[key] += 1;
                      });
                    // this.graphdata[ data[index].cars[j].color].value += 1;
                }

            }
        }
        console.log(this.graphdata)
        // for(item in this.graphdata){
        //     console.log(this.graphdata[item])
        // }
    }



}