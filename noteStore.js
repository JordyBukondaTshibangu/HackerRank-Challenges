class NoteStore {
    constructor() {
        this.noteCollection = [];
    }

    addNote(state, name){
        let noteState = state.toLowerCase();
        let noteName = name.toLowerCase();

        if(!name || name === "") throw new Error("Name cannot be empty");
        if(noteState === "completed" || noteState === "active" || noteState === "others"){
            if(noteState === "completed") this.noteCollection.push({completed : noteName});
            if(noteState === "active") this.noteCollection.push({active : noteName});
            if(noteState === "others") this.noteCollection.push({others : noteName});
        } 
        else  throw new Error(`Invalid state ${state}`);
        
    }

    getNote(state){
        let name = [];
        let noteState = state.toLowerCase();

        if(noteState === "completed" || noteState === "active" || noteState === "others"){
            for(let i of this.noteCollection){
                for(let j in i){
                    if( j === noteState)  name.push(i[j]);
                }
            }
        } else   throw new Error(`Invalid state ${state}`);
        
        
        return name;
    }
    
}

const myNewNoteOne = new NoteStore();
myNewNoteOne.addNote("completed", "eat Chicken for meal");
myNewNoteOne.addNote("Active", "COding algo");
myNewNoteOne.addNote("others", "listenning to music");

console.log(myNewNoteOne.getNote("active"));