class Story {
    
    constructor(title,creator){
        this.title=title;
        this.creator=creator;
        this._comments=[];
        this._likes=[];
    }

    get likes(){
        if (this._likes.length==0) {
           return `${this.title} has 0 likes`;
        }else if (this._likes.length==1) {
           return `${this._likes[0]} likes this story!`;
        }else{
           return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }
    like(username){
        if(this._likes.some(x=>x==username)){
            throw new Error(`You can't like the same story twice!`);
        }
        if(username==this.creator){
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike(username){
        if (!this._likes.some(x=>x==username)) {
            throw new Error(`You can't dislike this story!`)
        }
        this._likes=this._likes.filter(x=>x!==username);
        return `${username} disliked ${this.title}`;
    }
    comment(username,content,id){
        if(id===undefined||!(this._comments.some(x=>x.id==id)))
        {
            let commentObj={
                id: this._comments.length+1,
                username: username,
                content: content,
                replies: []
            }
            this._comments.push(commentObj);
            return `${username} commented on ${this.title}`
        }
        let commentToReply=this._comments.find(x=>x.id==id);
        let replyId=Number(`${id}.${commentToReply.replies.length+1}`);
        let replyObj={
            id: replyId,
            username: username,
            content :content,
        }
        commentToReply.replies.push(replyObj);
        return `You replied successfully`;
    }
    toString(sortingType){
        let sort;
        if(sortingType=='asc')
        {
            sort=(a,b)=>a.id-b.id;
        }else if(sortingType=='desc'){
            sort=(a,b)=>b.id-a.id;
        }else if(sortingType=='username'){
            sort=(a,b)=>a.username.localeCompare(b.username);
        }
        
        let array=this._comments.sort(sort);
        array.forEach(x=>x.replies.sort(sort));
        let commentOutput=[];
        for(const element of array){
            commentOutput.push(`-- ${element.id}. ${element.username}: ${element.content}`);
            if(element.replies.length>0){
                for (const reply of element.replies) {
                    commentOutput.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }
            }
        };
        let fullOutput=this._comments.length > 0 ? `\n${commentOutput.join('\n')}` : '';
        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:${fullOutput}`;
    }
}
 let art = new Story("My Story", "Anny");
 art.like("John");
 //art.like("John");
 console.log(art.likes);
 art.dislike("John");
 console.log(art.likes);
 //art.comment("Sammy", "Some Content");
 //console.log(art.comment("Ammy", "New Content"));
 //art.comment("Zane", "Reply", 1);
 //art.comment("Jessy", "Nice :)");
 //console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));