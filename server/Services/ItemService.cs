using server.Models;
using server.Repositories;

namespace server.Services
{
    public class ItemService
    {
        private readonly ItemRepository _repository;

        public ItemService(ItemRepository repository)
        {
            _repository = repository;
        }

        public Task<List<ItemModel>> GetProductsAsync()
        {
            return _repository.GetProductsAsync();
        }
    }
}
