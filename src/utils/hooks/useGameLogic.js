import React, {useState,useEffect} from 'react'

const useGameLogic = ()=>{
    const columns = 52
    const interval= 300
    const [grid, setGrid] = useState([])
    const [running, setRunning] = useState([false])
    const [steps, setSteps] = useState(0)


    //intiliaze function
    const initialize =(columns)=>{
        let cells = new Array(columns)
        for(let i=0; i<cells.length; i++){
            cells[i] = new Array(columns).fill(false)
        }
        cells[24][14] = true
        cells[25][13] = true
        cells[25][14] = true
        cells[25][15] = true
        cells[26][14] = true
        setGrid(cells)
    }

    //Use Effect to initialize once on render 
    useEffect(()=>{
        initialize(columns)
    },[])
    

    //Randomize Function
    const getRandomInt =(max)=> {
        return Math.floor(Math.random() * max);
      }
    const randomize = (oldGrid)=>{
        console.log('clicked')
        let newGrid = JSON.parse(JSON.stringify(oldGrid))
        newGrid = newGrid.map((column)=>
                column.map((cell) =>
                   
                    getRandomInt(2)==1 ? cell=false:cell=true
                )
            
        )
        console.log(newGrid)
        setGrid(newGrid)
    }

    //Reset function
    const reset=()=>{
        let cells = new Array(columns)
        for(let i=0; i<cells.length; i++){
            cells[i] = new Array(columns).fill(false)
        }
        cells[24][14] = true
        cells[25][13] = true
        cells[25][14] = true
        cells[25][15] = true
        cells[26][14] = true
        setGrid(cells)
        setRunning(false)
        setSteps(0)
    }



    return {grid, columns,steps,reset, randomize}
}

export default useGameLogic


