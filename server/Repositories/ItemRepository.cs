using server.Dtos;
using System.Text.Json;

namespace server.Repositories
{
    public class ItemRepository
    {
        private readonly string _filePath = "Data/Products.json";

        public async Task<List<ItemDto>> GetProductsAsync()
        {
            if (!File.Exists(_filePath))
                return new List<ItemDto>();

            var json = await File.ReadAllTextAsync(_filePath);
            var products = JsonSerializer.Deserialize<List<ItemDto>>(json);
            return products ?? new List<ItemDto>();
        }
    }
}
