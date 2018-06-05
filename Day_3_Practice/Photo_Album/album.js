function Album(){
    this.photos = [];
   
}

Album.prototype.addPhoto = function(filename,location){
    var newPhoto = new Photo(filename,location);
    this.photos.push(newPhoto);
}

Album.prototype.getPhoto = function(index){
    var thePhoto = this.photos[index];
    return thePhoto;
}

Album.prototype.list = function(){
    for(i = 0; i < this.photos.length; i++){
        console.log("The filename of the photo is: " + this.photos[i].filename);
        console.log("The location this photo was taken at is: " + this.photos[i].location);
    }
}

function Photo(filename,location){
    this.filename = filename;
    this.location = location;
}


var myAlbum = new Album();
myAlbum.addPhoto("Sunset", "New York");
myAlbum.addPhoto("River","Canada");
myAlbum.addPhoto("Beach","Brazil")

console.log(myAlbum.getPhoto(0));
console.log(myAlbum.getPhoto(1));
console.log(myAlbum.getPhoto(2));