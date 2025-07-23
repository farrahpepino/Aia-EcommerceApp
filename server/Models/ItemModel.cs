namespace server.Models{
    public class ItemModel{
        public int ItemId { get; set; }
        public string ItemName { get; set; } = string.Empty;
        public decimal ItemPrice { get; set; }
        public string Color {get; set;}
    }
}