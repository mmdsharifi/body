class body {
    
    private head : Head;
    private tounge : Tounge;
    
    public cutHead () : Head | null {
        return ( (this.head.isGreen() && this.tounge.isRed() ) ? this.head.cut() : null)
    }

}

interface Head {
    isGreen() ,
    color: string,
    cut()
}

interface Tounge {
    isRed() ,
    color: string;
}
