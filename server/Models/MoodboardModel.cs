namespace server.Models
{
    public class Moodboard
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }  
        public ICollection<MoodboardFile> Files { get; set; } = new List<MoodboardFile>();

    }

    public class MoodboardFile
    {
        public int Id { get; set; }
        public int MoodboardId { get; set; }
        public string FilePath { get; set; }
        public float PositionX { get; set; }
        public float PositionY { get; set; }
    }
}
