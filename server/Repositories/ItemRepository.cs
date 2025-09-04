using server.Dtos;
using System.Text.Json;

namespace server.Repositories
{
    public class ItemRepository
    {
        private readonly string _filePath = "Data/Products.json";

        public async Task<List<Item>> GetProductsAsync()
        {
            if (!File.Exists(_filePath))
                return new List<Item>();

            var json = await File.ReadAllTextAsync(_filePath);
            var products = JsonSerializer.Deserialize<List<Item>>(json);
            return products ?? new List<Item>();
        }
    }
}
