using server.Models;
using System.Text.Json;

namespace server.Repositories
{
    public class ItemRepository
    {
        private readonly string _filePath = "Data/Products.json";

        public async Task<List<ItemModel>> GetProductsAsync()
        {
            if (!File.Exists(_filePath))
                return new List<ItemModel>();

            var json = await File.ReadAllTextAsync(_filePath);
            var products = JsonSerializer.Deserialize<List<ItemModel>>(json);
            return products ?? new List<ItemModel>();
        }
    }
}
