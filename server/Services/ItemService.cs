using server.Dtos;
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

        public Task<List<Item>> GetProductsAsync()
        {
            return _repository.GetProductsAsync();
        }
    }
}
