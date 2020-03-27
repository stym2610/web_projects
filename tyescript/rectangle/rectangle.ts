export class rectangle {
  
    constructor(private _x? : number, private _y? : number) {}

    area = () => {
        console.log(this._x * this._y);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(value : number){
        this._x = value;
    }

    set y(value : number){
        this._y = value;
    }
};