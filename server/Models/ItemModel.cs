namespace server.Models{
    public class ItemModel{
        public int ItemId { get; set; }
        public string ItemName { get; set; } 
        public string ItemBrand {get; set; } 
        public string ItemSKU {get; set; }
        public string ImagePath {get; set;}
        public decimal ItemPrice { get; set; }
        public string Color {get; set;}
        public List<string> ItemSizes { get; set; }
    }
}