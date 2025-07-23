namespace server.Models{
    public class OrderModel{
        public int OrderId { get; set; }
        public List<ItemModel> Items { get; set; } = new List<ItemModel>();
        public decimal TotalCost { get; set; }
        public int UserId { get; set; }
        public DateTime OrderDateTime { get; set; } = DateTime.UtcNow;
    }
}
