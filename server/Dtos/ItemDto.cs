namespace server.Dtos{
    public class ItemDto{
        public string ItemId {get; set;}
        public decimal ItemPrice { get; set; } = 0m;
        public decimal Quantity { get; set; } = 0m;
    }
}