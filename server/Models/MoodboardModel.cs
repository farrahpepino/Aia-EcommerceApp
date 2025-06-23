namespace server.Models{
    public class Moodboard{
        public int Id {get; set;}
        public string UserId {get; set;}
        public string[] Files {get; set;} //objects position files: fileurl;,x,y photos
    }
}