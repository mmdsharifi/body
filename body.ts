class body {
    
    private head : Head;
    private tongue : Tongue;
    
    public cutHead () : Head | null {
        return this.head.isGreen() && this.tongue.isRed() ? this.head.cut() : null
    }

}

interface Head {
    isGreen() ,
    color: string,
    cut()
}

interface Tongue {
    isRed() ,
    color: string;
}
