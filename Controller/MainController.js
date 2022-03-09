import data from "./jsonHelper.js"

export default class MainController{
    graphdata = {};

    readJson(){
        let newData = data;
        
        for (let index = 0; index < newData.length; index++) {
            for (let j = 0; j < newData[index].cars.length; j++) {
                
                if(!(newData[index].cars[j].color in this.graphdata)) {

                        this.graphdata[ newData[index].cars[j].color ] = 1;
                }else{
                        this.graphdata[newData[index].cars[j].color] += 1;
                }

            }
        }
        return this.graphdata;
    }

}