namespace server.Dtos{
    public class ItemDto{
        public int ItemId { get; set; } = 0;
        public string ItemName { get; set; } = string.Empty;
        public string ItemBrand {get; set; } = string.Empty;
        public string ItemSKU {get; set; } = string.Empty;
        public string ImagePath {get; set;} = string.Empty;
        public decimal ItemPrice { get; set; } = 0m;
        public string Color {get; set;} = string.Empty;
        public List<string> ItemSizes { get; set; } = new List<string>();
    }
}