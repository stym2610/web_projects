export class like_button{
    constructor(private likeCount : number, private IsSelected : boolean) {}

    OnClick(){
        this.likeCount += this.IsSelected ? -1 : +1;
        this.IsSelected = !this.IsSelected;
        //console.log(`likeCount : ${this.likeCount} AND IsSelected : ${this.IsSelected}`);
    }

    get status(){
        return `likeCount : ${this.likeCount} AND IsSelected : ${this.IsSelected}`;
    }
};