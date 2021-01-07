export class bookModel{
    constructor(
        public bookId: number,
        public bookName: string,
        public bookAuthor: string,
        public description: string,
        public Rating: number,
        public imageUrl: string){}
}