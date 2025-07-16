namespace server.Models{
    public class Moodboard{
        public int Id {get; set;}
        public required string UserId { get; set; }
        public required List<string> Files { get; set; }
        //objects position files: fileurl;,x,y photos
    }
}